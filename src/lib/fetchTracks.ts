const apiToken: string = 'BQBILR4U9_dLPskMXiZHYzaPb_wqrnUbH27gvMFG9YWtHufFHsEksN6gj0Q_QJ2N672sKLuDdTAQJMAzhNIkTpUIqGfzUUOMdQCYSr6ybE6NH7-v-V5W6oyoBQvkUE0MRObcoZz4ygfAP7A3pQo10_gydaTg4jKKODuZtxkKP8K5GTibNRYlI1C27fJZSkvl3w5yt7XI';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
