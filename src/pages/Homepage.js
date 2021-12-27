import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productAction from '../redux/actions/product.action'

const Homepage = () => {
    const products = useSelector((state)=>state.products.allProducts)
    console.log("products", products)
    const dispatch = useDispatch()
    const isLoading = useSelector((state)=>state.products.isLoading)
    useEffect(()=>{
        dispatch(productAction.getAllProducts())
    }, [])

    return (
        <div className='App'>
            {
                isLoading||products.length===0?<h1>Loading...</h1> : products.map((product) => <p> {product.name} </p>)
            }
        </div>
    )
}

export default Homepage
