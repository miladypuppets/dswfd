import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import { Metadata } from '@metaplex-foundation/js';
import axios from 'axios';

// Initialize Solana connection
const connection = new Connection(clusterApiUrl('mainnet-beta'));

export async function getNftMetadata(mintAddress) {
  const metadataPDA = await Metadata.getPDA(new PublicKey(mintAddress));
  const metadataAccount = await Metadata.load(connection, metadataPDA);
  return metadataAccount;
}

export async function getNftImageUrl(mintAddress) {
  const metadata = await getNftMetadata(mintAddress);
  const uri = metadata.data.data.uri;
  const response = await axios.get(uri);
  return response.data.image;
}
