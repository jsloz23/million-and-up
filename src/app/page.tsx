/**
 * Import React and required components.
 */
"use client"
import SearchBar from '../components/SearchBar/SearchBar'
import CryptoList from "../components/CryptoList/CryptoList"
import CryptoModal from "../components/CryptoModal/CryptoModal"
import React from 'react';
/**
 * Import the custom hook for this page's view model.
 * This hook manages the state and logic for this component.
 */
import { usePageViewModel } from '@/viewModel/usePageViewModel';


/**
 * The Home component represents the main page of the application.
 * It displays a search bar, a list of cryptocurrencies, and a modal for detailed crypto information.
 */
export default function Home() {
  const {cryptoDataList, cryptoDataDetail, term, modal, handleSearchChange, handleFetchDetails} = usePageViewModel();

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <div>
        <h1 className='text-center text-5xl mb-2'>Million and up crypto currency database</h1>
      </div>
      <SearchBar handleSearchChange={handleSearchChange}/>
      <CryptoList cryptoData={cryptoDataList} term={term} handleFetchDetails={handleFetchDetails}/>
      {modal && <CryptoModal cryptoData={cryptoDataDetail} handleFetchDetails={handleFetchDetails}/> }
    </main>
  )
}
