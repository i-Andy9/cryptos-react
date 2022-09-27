import styled from '@emotion/styled'
import React, { useState } from 'react'

const Label =  styled.label`
    color: #fff;
    display:block;
    font-family: 'lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin : 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 5px;
    font-family: 'lato', sans-serif;
    font-weight: 700;
    
`

const useSelectCrypto = (msg,opcion,) => {
    
    const [state,setState] = useState('')
    
    const SelectMoneda =()=>(
        <>
            <Label>{msg}</Label> 

            <Select
                value={state}
                onChange={e => {setState(e.target.value)}}
            >
                <option 
                    key='' 
                    value='' 
                     
                >Seleccione</option>

                {opcion.length > 0 && opcion.map( o =>(
                        <option key={o.id} value={o.id}>{o.text}</option>
                    ))
                }
            </Select>
        </>
    )
 
    return [state,SelectMoneda]
}

export default useSelectCrypto