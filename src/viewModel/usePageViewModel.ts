import { fetchCryptocurrencyDetails, fetchCryptocurrencyList } from "@/utils/api";
import { useEffect, useState } from "react";

//Custom React hook for managing cryptocurrency data and search functionality.
export function usePageViewModel() {
    const [cryptoDataList, setCryptoDataList] = useState([]);
    const [cryptoDataDetail, setCryptoDataDetail] = useState([]);
    const [term, setTerm] = useState("");
    const [modal, setModal] = useState(false)

    //Fetches the list of cryptocurrencies from an external API and sets the cryptoDataList state.
    const apiCalls = async () => {
      const cryptoList = await fetchCryptocurrencyList()
      setCryptoDataList(cryptoList)
    }
    
    //Handles changes in the search term.
    const handleSearchChange = (term: string) => {
      setTerm(term)
    };
    
    // Perform API calls when the component mounts
    useEffect(() => {
      apiCalls()
    }, [])
    
    //Fetches details of a specific cryptocurrency by its ID from an external API, sets cryptoDataDetail, and toggles the modal.
    const handleFetchDetails = async (id: number) => {
      if(id){
      const cyptoDataDetailFetch = await fetchCryptocurrencyDetails(id)
      setCryptoDataDetail(cyptoDataDetailFetch)
    }
    setModal(!modal)
    }

    return {cryptoDataList, cryptoDataDetail, term, modal, handleSearchChange, handleFetchDetails}
}