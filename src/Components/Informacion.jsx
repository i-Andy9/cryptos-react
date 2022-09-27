import styled from '@emotion/styled'
import React from 'react'

const InfoCotizacion = styled.div`
  color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Precio = styled.div`
   font-size: 24px;
    span {
        font-weight: 700;
    }
`
const Text = styled.p`
  font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img`
   display: block;
    width: 120px;
`

const Informacion = ({Cotizacion}) => {

  const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = Cotizacion
 
  return (
    <InfoCotizacion>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imgcrypto" />
      <div>
        <Precio>El precio es de : <span>{PRICE}</span></Precio>
        <Text>El precio mas alto del dia : <span>{HIGHDAY}</span></Text>
        <Text>El precio mas alto del dia : <span>{LOWDAY}</span></Text>
        <Text>Variacion ultimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Ultima actualizacion : <span>{LASTUPDATE}</span></Text>
      </div>
    </InfoCotizacion>
  )
}

export default Informacion