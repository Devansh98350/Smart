import { NextApiRequest, NextApiResponse } from 'next';
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { RetrievalQAChain } from "langchain/chains";
import { OpenAI as LangchainOpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";

dotenv.config();

let chain: RetrievalQAChain | null = null;

async function initializeChain() {
  if (!chain) {
    const loader = new PDFLoader("../../documents/SmartGrader.pdf");
    const docs = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 20,
    });

    const splittedDocs = await splitter.splitDocuments(docs);

    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await HNSWLib.fromDocuments(splittedDocs, embeddings);

    const vectorStoreRetriever = vectorStore.asRetriever();
    const model = new LangchainOpenAI({
      modelName: 'gpt-3.5-turbo'
    });

    chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
  }
  return chain;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      await initializeChain();
      res.status(200).json({ success: true });
    } catch (error) {
      // Assert that the error is of type Error
      const err = error as Error;
      console.error("Error initializing chain:", err);
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}