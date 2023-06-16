import { useState } from "react"
import MainContent from "@/components/MainContent"
import Header from "@/components/Header"
import Footer from "@/components/Footer";

export default function Home() {
  const [ modalVisible, setModalVisible ] = useState(false);
  return (
    <>
      <Header 
        modalVisible={modalVisible} 
        setModalVisible={(visible)=>setModalVisible(visible)}
      />
      <MainContent modalVisible={modalVisible}/>
      <Footer/>
    </>
  )
}
