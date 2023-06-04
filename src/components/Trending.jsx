import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Trending = () => {
    const [trending,setTrending] = useState([])

    const url =  "https://api.coingecko.com/api/v3/search/trending"
    useEffect(()=>{
        axios.get(url).then(res=>{
            setTrending(res.data.coins)
            console.log(res.data)
        })
    },[])
  return (
    <div className='rounded-div my-12 py-8 text-primary'>
        <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                trending?.map((coin)=>(
                    <div key={coin.item.name} className='rounded-div flex justify-between hover:scale-105 ease-in-out duration-300 '>
                        <div>
                            <div>
                                <img className='rounded-full mr-4' src={coin.item.small} alt='/' />
                                <div>
                                    <p className='font-bold    '>{coin.item.name}</p>
                                    <p>{coin.item.symbol}</p>

                                </div>
                            </div>
                            <div>
                                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?154703379" alt="/" className='w-4 mr-4' />
                                <p>{coin.item.price_btc.toFixed(7)}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Trending