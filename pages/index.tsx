import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CdnImage from '../components/ImageFromCDN'
import FragmentExample from '../components/FragmentExample'
import ClickEventButton from '../components/button'; 

export default function Home() {
  const ClickMe = () => {
    console.log("change log text");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ITHS
        </h1>
        <FragmentExample></FragmentExample>
        <CdnImage imgUrl="https://res.cloudinary.com/ql-cdn-dev/image/upload/w_300,h_200,c_scale/MIT-Coding-Brain-01-press_0.jpg"></CdnImage>
        <ClickEventButton onClick={ClickMe}>Klicka!</ClickEventButton>
      </header>
    </div>

  )
}
