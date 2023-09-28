import axios from "axios";

//Fetches a list of cryptocurrencies from an external API.
export async function fetchCryptocurrencyList() {
  try {
    const response = await axios.get(`https://api.coinlore.net/api/tickers/`);
    return response.data?.data;
  } catch (error) {
    console.error("Error fetching cryptocurrency list:", error);
    throw error;
  }
}

//Fetches details of a specific cryptocurrency by its ID from an external API.
export async function fetchCryptocurrencyDetails(id) {
  try {
    const response = await axios.get(
      `https://api.coinlore.net/api/ticker/?id=${id}`
    );
    return response.data[0];
  } catch (error) {
    console.error("Error fetching cryptocurrency details:", error);
    throw error;
  }
}
