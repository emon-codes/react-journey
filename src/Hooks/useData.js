import React, { useEffect, useState } from 'react'

const useData = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("product.json")
            .then((res) => res.json())
        .then((data) => setProduct(data))
    },[] )



    return {
      product
  }
    
  
}

export default useData