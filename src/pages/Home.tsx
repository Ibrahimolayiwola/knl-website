import CallToAction from "../components/CallToAction"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Products from "../components/Products"
import RequestPrice from "../components/RequestPrice"
import { useStateContext } from "../context/StateContext"

const Home = () => {
    const {selectedProduct} = useStateContext()

    return (
        <>
            <Header />
            <>
                <Hero />
                <Features />
                <Products />
                <CallToAction />
                {
                    selectedProduct && (
                        <RequestPrice />
                    )
                }
            </>
            <Footer />
        </>
    )
}

export default Home