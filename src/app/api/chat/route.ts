import { NextResponse } from 'next/server';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

async function fetchChain() {
  try {
    const res = await fetch('http://localhost:3000/src/app/api/load-chain');
    const data = await res.json();
    if (!data.success) {
      throw new Error(data.error);
    }
    return data.chain; // Ensure you return the chain or any data you need
  } catch (error) {
    console.error("Error fetching chain:", error);
    throw error; // Rethrow to handle it in the main function
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const query = messages[messages.length - 1]?.content;

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    let pdfAnswer = null;

    try {
      const chain = await fetchChain();
      const chainRes = await fetch('http://localhost:3000/src/app/api/get-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const chainData = await chainRes.json();
      pdfAnswer = chainData.answer || null;
    } catch (error) {
      console.error("Error retrieving answer from PDF:", error);
    }

    if (pdfAnswer) {
      return NextResponse.json({ question: query, answer: pdfAnswer });
    } else {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
        stream: true,
      });

      const stream = OpenAIStream(response);

      return new StreamingTextResponse(stream);
    }
  } catch (error) {
    console.error("Unhandled error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}












// import type { NextApiRequest, NextApiResponse } from 'next';
// import { PDFLoader } from "langchain/document_loaders/fs/pdf";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { HNSWLib } from "langchain/vectorstores/hnswlib";
// import { RetrievalQAChain } from "langchain/chains";
// import { OpenAI } from "langchain/llms/openai";
// import * as dotenv from "dotenv";

// dotenv.config();

// let chain: RetrievalQAChain | null = null;

// async function initializeChain() {
//   if (!chain) {
//     try {
//       console.log("Loading PDF...");
//       const loader = new PDFLoader("/public/SmartGrader.pdf");
//       const docs = await loader.load();
//       console.log("PDF loaded");

//       const splitter = new RecursiveCharacterTextSplitter({
//         chunkSize: 1000,
//         chunkOverlap: 20,
//       });

//       const splittedDocs = await splitter.splitDocuments(docs);
//       console.log("Documents split");

//       const embeddings = new OpenAIEmbeddings();
//       const vectorStore = await HNSWLib.fromDocuments(splittedDocs, embeddings);
//       console.log("Vector store created");

//       const vectorStoreRetriever = vectorStore.asRetriever();
//       const model = new OpenAI({
//         modelName: 'gpt-3.5-turbo'
//       });

//       chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
//       console.log("Chain initialized");
//     } catch (error) {
//       console.error("Error during chain initialization:", error);
//       throw error;
//     }
//   }
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { query } = req.body;

//     if (!query) {
//       res.status(400).json({ error: "Query is required" });
//       return;
//     }

//     try {
//       await initializeChain();

//       if (!chain) {
//         throw new Error("Chain is not initialized");
//       }
//       const answer = await chain.call({ query });
//       res.status(200).json({ question: query, answer });
//     } catch (error: any) {
//       console.error("Error during query handling:", error);
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
