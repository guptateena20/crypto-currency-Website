import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Routes, Route} from "react-router-dom"
import Coins from '../coins/Coins';
import Navbar from '../navbar/Navbar';
import Coin from '../../routes/Coin';
import Loader from '../loader/Loader';

const Pages = () => {
    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState([]);
    const [isError, setIsError] = useState("")

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'


    const getApiData = async() => {
        setLoading(true);
        try{
            let res = await axios.get(url);
            setCoins(res.data)
            console.log(res.data)
        }
        catch(isError){
            setIsError(isError.message)
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        getApiData();
    }, [])

    if(loading){
        return (<Loader/>)
    }
    
    return (
        <>
            <Navbar/>
            
            <Routes>
                <Route path = "/" element = {<Coins coins = {coins}/>}/>
                <Route path = "coin/:coinid" element = {<Coin/>}/>
            </Routes>
                    
            {isError !== "" && <h1>{isError}</h1>}
           
        </>
    )
}

export default Pages

    
