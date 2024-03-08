import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { CompaniesSection } from './components/CompaniesSection'
import { AboutSection } from './components/AboutSection'

function App() {


  return (
    <main className='px-4 pt-6'>
     <Header />
     <HeroSection />
     <CompaniesSection />
     <AboutSection />
    </main>
  )
}

export default App
