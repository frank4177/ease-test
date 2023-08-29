import FAQs from '@/components/sections/FAQS'
import Hero from '@/components/sections/Hero'
import Language from '@/components/sections/Language'
import Navbar from '@/components/sections/Navbbar/indext'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Language/>
      <FAQs/>
    </main>
  )
}
