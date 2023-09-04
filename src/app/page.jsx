import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className='sections-container'>
          <Hero />
          <PrimaryFeatures />
          <CallToAction />
          <Pricing />
          <Faqs />
        </div>
        
      </main>
      <Footer />
    </>
  )
}
