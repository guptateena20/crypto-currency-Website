import React from 'react'
import CoinsItem from './CoinsItem'
import { NavLink } from 'react-router-dom'
import "./coins.css"
import Coin from '../../routes/Coin'

const Coins = ({ coins }) => {
    return (
        <>
            <div className='container'>
                <div>
                    <div className='heading'>
                        <p>#</p>
                        <p className='coin-name'>Coin</p>
                        <p>Price</p>
                        <p>24h</p>
                        <p className='hide-mobile'>Volume</p>
                        <p className='hide-mobile'>Mkt Cap</p>
                    </div>

                    {

                        coins.map((coin) => {
                            return (
                                <NavLink to={`/coin/${coin.id}`}   key={coin.id} >
                                    <CoinsItem coins={coin}/>
                                </NavLink>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Coins