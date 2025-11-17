import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#F7FBFF] text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default Landing