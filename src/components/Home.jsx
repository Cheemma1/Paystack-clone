import React from 'react'
import Header from './Header'
import GifSection from './GifSection'
import BuildApi from './BuildApi'
import Protect from './Protect'
import Trusted from './Trusted'
import Icon from './Icon'
import Parterners from './Parterners'
import TryPaystack from './TryPaystack'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
<Header/>
<GifSection/>
     <BuildApi/>
     <Protect/>
     <Trusted/>
     <Icon/>
     <Parterners/>
     <TryPaystack/>
     <Footer/>

    </div>
  )
}

export default Home