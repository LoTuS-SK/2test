import React from 'react'
import { useSearchParams } from "react-router-dom"
 

const Salats = () => {

  const [queryParameters] = useSearchParams()

  //const  str = "https://teal-lamington-08734d.netlify.app/salat?name=%5B%7B%22name%22:%22%14%3E%3C0H=55%20A0;%3E%20=0%203@5=:0E%22,%22count%22:1%7D,%7B%22name%22:%22%11%3E@%3E28:8%20A%204CH8ABK%3C%20%3C0A;%3E%3C%22,%22count%22:1%7D,%7B%22name%22:%22%13@C748%20A%3E%20A%3C5B0=%3E%22,%22count%22:1%7D%5D"

  //const str1 = unescape(str)

//nst str2 = decodeURI(str)

 const str = decodeURI(queryParameters.get("name"))

  const arr = JSON.parse(str)
  
  return (
    <div>
      <h1>Заказ</h1>
      {arr.map((el=>(
        <div>{el.name}</div>
      )))}
      <div>{str}</div>
      
    </div>
  )
}

export default Salats