import React,{useState} from 'react';
import productContext from './ProductContext';

const ProductState = (props) =>{
    const url ='https://dummyjson.com/products';

    const [products, setProducts] = useState([]);

    //get all the products
    const getProducts = async() =>{
        try {
            const response = await fetch(url);
            const result = await response.json();
            //console.log(result);
            setProducts(result["products"]);
        } catch (error) {
            console.error(error);
        }
    }

    //get a single product
    const getProduct =async(id)=>{
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await response.json();
            //console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <productContext.Provider value={{products, getProducts, getProduct}}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;
