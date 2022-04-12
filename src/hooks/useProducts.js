import  { useState, useEffect } from 'react';


const useProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
    
  }, [])

  return [products, setProducts];

}

export default useProducts