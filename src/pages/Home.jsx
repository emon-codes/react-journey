import React from 'react'
import useData from '../Hooks/useData'

const Home = () => {

 const {products} = useData()


  return (
    <div className='flex flex-row flex-wrap gap-3'>{products.map((product) => (
      <div  >
        <div>
          <img className='w-64 h-80 shadow-md object-cover rounded-md' src={product.image} alt="" />
          <h1>{product.name }</h1>
        </div>




      </div>
  




    ) ) }</div>
  )
}

export default Home