import styled from 'styled-components'

export const Container=styled.div`
    display:flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Heading=styled.h1`
    color:#252627;
    font-weight: bold;
    font-size:30px;
    text-align: center;
`

export const Con=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color:#f1f5f9;
    border-radius: 10px;
    padding:10px;
`

export const Img=styled.img`
    height:20px;
`

export const Input=styled.input`
    background-color: #f1f5f9;
    outline: none;
    border-width:0px;
`

export const Ul=styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`