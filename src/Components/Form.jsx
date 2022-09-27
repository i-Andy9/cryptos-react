 
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { monedas } from '../Data/Monedas'
import useSelectCrypto from '../Hooks/useSelectCrypto' 
import ErrorMsg from './ErrorMsg'
import Informacion from './Informacion'
import Spinner from './Spinner'

const InputSubmit= styled.input`
  background-color: #9794ff;
  margin: 30px auto 10px auto;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size:23px;
  border-radius:5px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #726fc7;
    cursor: pointer;
  } 
`

const Form = () => {
  const [cryptosList, setCryptosList] = useState([])

  const [moneda,SelectMoneda ] = useSelectCrypto('Elige tu moneda',monedas)
  const [crypto,SelectCrypto] = useSelectCrypto('Elige tu Crypto',cryptosList)

  const [flagError,setFlagError] = useState(false)
  const [Loading,setLoading] = useState(false)

  const [CoinObj,setCoinObj] = useState({})
  const [Cotizacion,setCotizacion] = useState({})

  const handleSubmit =()=>{
    if([moneda,crypto].includes('')) return setFlagError(true)
    
    setFlagError(false)
    setCoinObj({ moneda,crypto }) 
    return
  }

  //captura de cabmios de cotizacion
  useEffect(()=>{ 
    if(!Object.keys(CoinObj).length >0) return
    setLoading(true)
    const cotizacion = async ()=>{
     
      const {moneda,crypto} = CoinObj

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`
      const resp = await fetch(url)
      const data = await resp.json() 
      setCotizacion(data.DISPLAY[crypto][moneda]) 
      setLoading(false)
    }
    cotizacion() 
  },[CoinObj])

  // llamada a la api y captura de datos de cryptos
  useEffect(()=>{
    const apiCall = async ()=>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

      const resp = await fetch(url)
      const data = await resp.json()

      const cryptoList = data.Data.map((c) => {
        const obj = {
          id:c.CoinInfo.Name,
          text:c.CoinInfo.FullName,
        }
        return obj
      }) 
      setCryptosList(cryptoList)
    }
    apiCall()
  },[])
 
  return (
    <>
      {flagError && <ErrorMsg> Selecciona opciones validas</ErrorMsg> }
      <form 
      >
        <SelectMoneda/>
        <SelectCrypto/> 
        <InputSubmit type="button" value="Cotizar" onClick={handleSubmit}  />
      
      {Loading && <Spinner/> }
      { !Loading && Cotizacion.PRICE && <Informacion Cotizacion={Cotizacion}/>}
      </form>
    </>
  )
}

export default Form