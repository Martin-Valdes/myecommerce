import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addProduct = (newProduct) =>{

        const condition =onCart(newProduct.id)

        if(condition){
            const modifiProduct = cart.map((productoCarrito)=>{
                if(productoCarrito.id===productoCarrito.id){
                    return{...productoCarrito,cantidad: productoCarrito.cantidad+newProduct.cantidad}
                }else{
                    return productoCarrito
                }
            })
       
            setCart(modifiProduct)
        }else{
            setCart([...cart,newProduct])
        }


        
    }
    
    const onCart = (idProduct) =>{
       return cart.some((producto)=> producto.id === idProduct)
    }


    const allArticle = () =>{
       return cart.reduce((all,newProduct)=>all+newProduct.cantidad,0)
    }

    const deleteCart = () =>{
        setCart([])
    }

    const deleteArticle = (idProduct) =>{
        const filterProduct = cart.filter((producto) => producto.id !== idProduct)
        setCart(filterProduct)
        
    }

    return(
        <CartContext.Provider value={{cart, addProduct, allArticle,deleteCart, deleteArticle}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}