import React, { useEffect, useState } from 'react'
import ThemeProvider, { getInitialTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Signin from './routes/Signin'
import Signup from './routes/Signup'
import Account from './routes/Account'
import axios from 'axios'
import CoinPage from './routes/CoinPage'
import Footer from './components/Footer'
import AuthContextProvider from './context/AuthContext'

const App = () => {
  const [coins, setCoins] = useState([])
  const [priTheme, setPrimTeam] =  useState(localStorage.getItem("color-theme"))
  const url =`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en
  `
  
  useEffect(()=>{
    setPrimTeam(getInitialTheme())
  },[])
  useEffect(()=>{

    axios.get(url).then((response)=>{
      setCoins(response.data)
      
    }).then((res)=>{
      
    }).catch((err)=>{
    console.error(err)})
  },[url])
  return (
    <ThemeProvider initialTheme={priTheme}>
      <AuthContextProvider>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home coins={coins}/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path="/coin/:coinId" element={<CoinPage/>}>
          <Route path=':coinId'/>
        </Route>
      </Routes>
      <Footer/>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App