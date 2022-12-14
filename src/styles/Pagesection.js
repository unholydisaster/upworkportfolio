import styled from 'styled-components'
import Image from 'next/image'

const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Image1=styled(Image)`
${mq[0,1]}{

}`

export const Image2=styled(Image)`
${mq[0,1]}{

}`

export const Imagecontainer=styled.div`{
    width:100vw;
    height:100vh;
    position:fixed !important;

    .image{
        object-fit:contain;
        width:100vw !important;
        height:100vh !important;
        position:relative !important;
    }
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
    background-color:black;
    border:1px solid whitesmoke;
    border-radius:10px;
    position:relative;
    opacity:50%;
    }`

    export const Div3=styled.div`
    ${mq[0,1]}{
    width:58vw;
    height:240px;
    top:55px;
    left:43vw;
    background-color:white;
    
    border:1px solid whitesmoke;
    position:absolute;

    .image{
        object-fit:contain;
        position:relative;
    }
    }`

    export const Div4=styled.div`
    ${mq[0,1]}{
    width:100vw;
    height:500px;
    top:300px;
    background-color:black;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:absolute;
    opacity:95%;

    }`

    export const Div5=styled.div`
    ${mq[0,1]}{
    width:94%;
    height:400px;
    top:50px;
    left:3%;
    background-color:black;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:relative;
    opacity:95%;

    }`

    export const Div6=styled.div`
    ${mq[0,1]}{
    width:100vw;
    height:80px;
    top:810px;
    background-color:black;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:absolute;
    opacity:95%;

    }`

    export const Div7=styled.div`
    ${mq[0,1]}{
    width:100vw;
    height:400px;
    top:910px;
    background-color:black;
    border-radius:10px;
    border:1px solid whitesmoke;
    position:absolute;
    opacity:95%;

    }`
    