import styled from '@emotion/styled'
import { useState } from 'react'
import ImgCrypto from '../src/img/imagen-criptos.png'
import Form from './Components/Form'


const Contenedor = styled.div`
  max-width: 950px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 792px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
  }
` 
const Img = styled.img`
  max-width: 400px;
  width:80%;
  margin: 100px auto 0 auto ; 
  display: block;
`
const Heading = styled.h1`
  font-family: 'Lato' , sans-serif;
  color: #fff; 
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px ;
  font-size: 34px;

  &::after {
    content: '';
    width: 420px;
    height: 3px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }

`

function App() { 


  return (
    <div className="App"> 
      <Contenedor>
        <Img
          src={ImgCrypto}
          alt='img-cryptos'
        />
        <div>
          <Heading>Cotiza tu crypto favorta aqui</Heading>
          <Form/>
        </div>
      </Contenedor>
    </div>
  )
}

export default App
