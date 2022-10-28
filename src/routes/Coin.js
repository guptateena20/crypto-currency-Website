import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./coin.css"
import CoinData from './CoinData'

const Coin = () => {
  const params = useParams();
  console.log(params.coinid);
  const [coin, setCoin] = useState({})
  const [error, setError] = useState("")

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinid}`;

  const getApiCoinData = async() => {
    try{
      let response = await axios.get(url)
      setCoin(response.data)
      console.log(response.data);
    }
    catch(error){
      setError(error.message)
    }
  }

  useEffect(() => {
    getApiCoinData();
  }, [])

  return (
    <>
    <div>
      <CoinData coin = {coin}/>
    </div>
    </>
  )
}

export default Coin