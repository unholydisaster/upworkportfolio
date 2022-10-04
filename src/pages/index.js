import { Div, Div2, Div3, Div4, Div5, Div6, Div7, Imagecontainer, Img, ImgBackground } from "../styles/Pagesection";
import backgroundPic from "../../public/Image1.jpg"
import profilepic from "../../public/Image2.jpg"
import Image from 'next/image'
import Navbar from "../components/Navbar";
import { Logoname } from "../styles/Logo";

export default function Home() {
  return (
    <>
    <Imagecontainer>
    <Image src={backgroundPic} layout="fill" alt="big"/>
    </Imagecontainer>
    
    <Div>
      <Navbar/>
      <Logoname >Eli Musa</Logoname>
    </Div>
    <Div2/>
    <Div3>
    <Image src={profilepic}  alt="big"/>
    </Div3>
    <Div4>
      <Div5/>
    </Div4>
    <Div6/>
    <Div7/>
    </>

  )
}

/*
<ImgBackground>
<Img src={backgroundPic} alt="big"/>
</ImgBackground>
*/