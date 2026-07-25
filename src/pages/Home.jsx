import React from 'react'
import useData from '../Hooks/useData'

const Home = () => {

 const {product} = useData()


  return (
    <div>{product.map((produc) => (<h1>{produc.name }</h1>) ) }</div>
  )
}

export default Home