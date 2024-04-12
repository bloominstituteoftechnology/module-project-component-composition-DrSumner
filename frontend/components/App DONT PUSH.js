import { Axios } from "axios"
import { useEffect } from "react"
import { useState } from "react"
import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import Heading from './Header'

const url = 'https://api.nasa.gov/planetary/apod?api_key='
const backup = 'http://localhost:9009/api/apod?api_key=DEMO_KEY'
const apiKey = '7VhxaM2hZgKQ6EHgLBawgFDQWwatnosYif2wdYdy'

function App() {
  const [data, setData] = useState([])
useEffect(() => {
  function getData() {
    axios.get(url+apiKey)
    .then(res => {
      const Data = res.data
      //console.log(Data)
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
