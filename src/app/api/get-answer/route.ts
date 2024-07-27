import { NextApiRequest, NextApiResponse } from 'next';
import { RetrievalQAChain } from 'langchain/chains';

let chain: RetrievalQAChain | null = null;

// Fetch the existing chain from the initialized state
async function fetchChain(): Promise<RetrievalQAChain> {
  if (!chain) {
    const res = await fetch('http://localhost:3000/src/app/api/load-chain');
    const data = await res.json();
    if (data.success) {
      // Assuming the chain object is being returned in the response
      // You might need to adjust this part depending on what `data` contains
      chain = data.chain as RetrievalQAChain;
    } else {
      throw new Error(data.error);
    }
  }
  if (!chain) {
    throw new Error('Chain is not initialized');
  }
  return chain;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { query } = req.body;
    try {
      const chain = await fetchChain();
      if (!chain) {
        throw new Error('Chain is not available');
      }
      const response = await chain.call({ query });
      res.status(200).json({ question: query, answer: response.text });
    } catch (error) {
      const err = error as Error;
      console.error('Error fetching answer from chain:', err);
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
