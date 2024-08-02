export async function fetchCharacters() {
  const response = await fetch(
    "https://gateway.marvel.com/v1/public/characters?apikey=your_api_key"
  );
  const data = await response.json();
  return data.data.results;
}
