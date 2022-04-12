import { useState } from "react/cjs/react.development"
import { useEffect } from "react/cjs/react.production.min"

const useProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))


    
  }, [])

  return [products, setProducts];

}

export default useProducts