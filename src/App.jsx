import React from 'react'
import ProductCard from './assets/components/ProductCard'
import Header from './assets/components/Header'

const App = () => {
  return (
<>
    <Header/>

    <div className="grid grid-cols-3">
    
<ProductCard name="Iphone14" category="Smartphone" brand="Apple" price="499"/>
<ProductCard name="Iphone14" category="Smartphone" brand="Apple" price="499"/>
<ProductCard name="Iphone14" category="Smartphone" brand="Apple" price="499"/>
<ProductCard name="Iphone14" category="Smartphone" brand="Apple" price="499"/>







    </div>
    </>
  )
}

export default App