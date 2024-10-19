import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "../css/Currency.css";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_tJax23aHYPOAGrjdoJCjCDbxWBZlCeLbYEtRqZNr";

function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState();

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div className='main-class'>
            <div className=' title'>Dövüz Kuru Hesaplama</div>
            <div className="row">
                <input type="number" className='input' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select onChange={(e) => setFromCurrency(e.target.value)} className='select-item' >
                    <option >USD</option>
                    <option >EUR</option>
                    <option >TRY</option>
                    <option >RON</option>
                    <option >CZK</option>
                </select>

                <div>
                    <MdKeyboardDoubleArrowRight style={{ fontSize: "25px", marginRight: "10px" }} />
                </div>

                <select onChange={(e) => setToCurrency(e.target.value)} className='select-item'>
                    <option >TRY</option>
                    <option >USD</option>
                    <option >EUR</option>
                    <option >RON</option>
                    <option >CZK</option>
                </select>
                <input type="number" value={result} className='input' />
            </div>
            <div ><button onClick={exchange} className="buttonn">Çevir</button></div>
        </div>
    )
}

export default Currency