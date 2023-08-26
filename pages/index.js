import MainSection from "@/components/main-section/main-section"
import Slider from "@/components/slider/slider"
import New from "@/components/new/new"
import Additional from "@/components/additional/additional"
import Overview from "@/components/overview/overview"
import Download from "@/components/download/download"
import Form from "@/components/form/form"
import Footer from "@/components/footer/footer"

export default function Home() {
  return (
    <>
    <MainSection/>
    <Slider/>
    <New/>
    <Additional/>
    <Overview/>
    <Download/>
    <Form/>
    <Footer/>
    </>
  )
}

