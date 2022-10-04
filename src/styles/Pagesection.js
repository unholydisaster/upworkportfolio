import styled from 'styled-components'
import Image from 'next/image'

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Imagecontainer=styled.div`{
    width:100vw;
    height:100vh;
    position:fixed;

}`

export const Div=styled.div`{
    width:100vw;
    height:50px;
    background-color:white;
    position:relative;
    Z-index:20;
}`

export const Div2=styled.div`
    ${mq[0,1]}{
    width:43vw;
    height:240px;
    top:5px;
    background-color:white;
    border:1px solid whitesmoke;
    position:relative;
    }`

    export const Div3=styled.div`
    ${mq[0,1]}{
    width:58vw;
    height:240px;
    top:55px;
    left:43vw;
    background-color:white;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:absolute;
    }`

    export const Div4=styled.div`
    ${mq[0,1]}{
    width:100vw;
    height:500px;
    top:300px;
    background-color:white;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:absolute;
    }`

    export const Div5=styled.div`
    ${mq[0,1]}{
    width:94%;
    height:400px;
    top:50px;
    left:3%;
    background-color:white;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:relative;
    }`

    export const Div6=styled.div`
    ${mq[0,1]}{
    width:100vw;
    height:80px;
    top:810px;
    background-color:white;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:absolute;
    }`

    export const Div7=styled.div`
    ${mq[0,1]}{
    width:100vw;
    height:400px;
    top:910px;
    background-color:white;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:absolute;
    }`
    