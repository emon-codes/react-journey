import React from 'react'
import useData from '../Hooks/useData'

const Home = () => {

 const {product} = useData()


  return (
    <div className='flex flex-row flex-wrap gap-3'>{product.map((produc) => (
      <div  >
        <div>
          <img className='w-64 h-80 shadow-md object-cover rounded-md' src={produc.image} alt="" />
          <h1>{produc.name }</h1>
        </div>




      </div>
  




    ) ) }</div>
  )
}

export default Home