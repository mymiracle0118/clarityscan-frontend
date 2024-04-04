import React from 'react'
import Hero from '@/components/home/Hero'
import Navbar from '@/components/layouts/Header/Navbar'
import Footer from "@/components/layouts/Footer/Footer"
import styles from '@/constants/style'

const App = () => {
  return (
    <div className='w-full h-full overflow-hidden bg-[url(/src/assets/images/auth/bg_welcome.jpeg)]'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Footer />
        </div>
      </div>

    </div>
  )
}

export default App