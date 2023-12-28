import React, { useEffect, useState } from 'react'

function Currencyinfo(currency) {
    const [Currencydata, setCurrencydata] = useState("")
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => setCurrencydata(response[currency]))
    },[currency])
  
    return Currencydata;

}

export default Currencyinfo