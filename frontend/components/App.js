import { Axios } from "axios"
import { useEffect } from "react"
import { useState } from "react"
import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import Heading from './Header'

const demoKey = "DEMO_KEY"
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const backup = 'http://localhost:9009/api/apod?api_key=DEMO_KEY'


function App() {
  const [data, setData] = useState([])
useEffect(() => {
  function getData() {
    axios.get(backup)
    .then(res => {
      const Data = res.data
      
      setData(Data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
  getData()
  
}, [])

return (
  <>
  <Heading data = {data}/>
  <Footer data ={data}
  />
  </>
)

}

export default App
