import React, { useState } from 'react'
import './style.css'
import Currencyinfo from './Currencyinfo';

function CurrencyConvertor() {

    const [Currencyfrom, setCurrencyfrom] = useState("1");
    const [Currencyto, setCurrencyto] = useState("");
    const [ConvertCurrencyfrom, setConvertCurrencyfrom] = useState("usd");
    const [ConvertCurrencyto, setConvertCurrencyto] = useState("inr");


    const currencyInfo = Currencyinfo(ConvertCurrencyfrom);
    const options = Object.keys(currencyInfo)
    
    const convertAmount = () => {
        let res = currencyInfo[ConvertCurrencyto] * Currencyfrom
        setCurrencyto(Math.floor(res * 100) / 100);
    }
    const swapdivs=()=>{
        setCurrencyfrom(Currencyto)
        setCurrencyto(Currencyfrom)
        setConvertCurrencyto(ConvertCurrencyfrom);
        setConvertCurrencyfrom(ConvertCurrencyto)
    }
    

    return (
        <div>
            <div className='Card flex'>
                <div className='innercard'>
                    <div className='upperdiv flex'>
                        <h4>From</h4>
                        <h4>Currency Type</h4>
                    </div>
                    <div className='lowerdiv flex'>
                        <input type='text'
                            value={Currencyfrom}
                            onChange={(e) => {
                                setCurrencyfrom(e.target.value)
                            }}
                        />
                        <select  value={ConvertCurrencyfrom} onChange={(e) => setConvertCurrencyfrom && setConvertCurrencyfrom(e.target.value)}>
                            {options.map((curencyprefix) => (

                                <option id={curencyprefix} >{curencyprefix}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className='innercard'>
                    <div className='upperdiv flex'>
                        <h4>To</h4>
                        <h4>Currency Type</h4>
                    </div>
                    <div className='lowerdiv flex'>
                        <input
                            type='text'
                            value={Currencyto}
                            onChange={(e)=>setCurrencyto(e.target.value)}
                            disabled={true}
                        />
                        <select value={ConvertCurrencyto} onChange={(e) => {setConvertCurrencyfrom &&
                            setConvertCurrencyto(e.target.value)
                            setCurrencyto("")
                        }}>
                            {options.map((curencyprefix) => (

                                <option id={curencyprefix} >{curencyprefix}</option>
                            ))}
                        </select>

                    </div>

                </div>
                <div className='innercardconvert' onClick={() => convertAmount()}>Convert {ConvertCurrencyfrom.toUpperCase()} to {ConvertCurrencyto.toUpperCase()}</div>
            </div>
            <div className='swapbtn' onClick={()=>swapdivs()}>Swap</div>
        </div>
    )
}

export default CurrencyConvertor;
