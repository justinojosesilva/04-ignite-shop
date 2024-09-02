import { createContext, ReactNode, useEffect, useState } from "react";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description?: string;
  defaultPriceId?: string;
}

interface ProductsContextType {
  products: Product[],
  addProduct: (product: Product) => void
}

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  const addProduct = (product: Product) => {
    console.log("product", products)
    if(products.length === 0) {
      products.push(product)
    } else {
      setProducts(state => [
        ...state,
        product
      ])
    }
    localStorage.setItem("@04-ignite-shop:products", JSON.stringify(products))
  }

  useEffect(() => {
    const productsStorage = localStorage.getItem("@04-ignite-shop:products")
    if(productsStorage) {
      setProducts(JSON.parse(productsStorage))
    }
  }, [])
  return (
    <ProductsContext.Provider value={{
      products,
      addProduct
    }}>
      {children}
    </ProductsContext.Provider>
  )
}