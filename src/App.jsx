import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { CompaniesSection } from './components/CompaniesSection'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

function App() {


  return (
    <main className='px-4 pt-0 md:px-0'>
     <Header />
     <HeroSection />
     <CompaniesSection />
     <AboutSection />
     <ServicesSection />
     <CTASection />
     <Footer />
    </main>
  )
}

export default App
