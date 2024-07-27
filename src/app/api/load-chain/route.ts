import { NextRequest, NextResponse } from 'next/server';
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

export async function GET(req: NextRequest) {
  try {
    await initializeChain();
    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error;
    console.error("Error initializing chain:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
