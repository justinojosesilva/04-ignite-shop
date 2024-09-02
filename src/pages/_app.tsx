import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";



import logoImg from '../assets/logo.svg';
import camiseta1 from '../assets/1.png';
import { CartContainer, CartContent, CartDescription, CartFooter, CartImageContainer, CartItem, CartPrice, CartQuantity, CartTitle, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet";

globalStyles()

import '../global.css';
import Link from "next/link";
import { ProductsContext, ProductsProvider } from "../contexts/ProductsContext";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { products } = useContext(ProductsContext)

  console.log('header', products)
  return (
    <Container>
      <ProductsProvider>
        <Header>
          <Image src={logoImg} alt="" />

          

          <Sheet>
            <SheetTrigger asChild>
              <CartContainer>
                <Handbag size={24} weight="bold"/>
              </CartContainer>
            </SheetTrigger>
            <SheetContent side="right" className="w-[600px] sm:max-w-md bg-[#202024]">
              
                <SheetHeader>
                  <SheetTitle className="mt-16 ">
                    <CartTitle>
                      Sacola de compras
                    </CartTitle>                
                  </SheetTitle>
                </SheetHeader>

                <SheetDescription>
                  <CartContent>
                    {products && products.map((product) => {
                      console.log('carrinho', product)
                      return (
                        <CartItem key={product.id}>
                          <CartImageContainer>
                            <Image src={product.imageUrl} alt="" width={94.79} height={94.79}/>
                          </CartImageContainer>
                          <CartDescription>
                            <p>{product.name}</p>
                            <span>{product.price}</span>
                            <Link href='' onClick={() => console.log('remover')}>Remover</Link>
                          </CartDescription>
                        </CartItem>
                      )
                    })}
      
                  </CartContent>
                  <CartFooter>
                    <CartQuantity>
                      <p>Quantidade</p>
                      <span>3 itens</span>
                    </CartQuantity>
                    <CartPrice>
                      <p>Valor total</p>
                      <span>R$ 270,00</span>
                    </CartPrice>
                    <button>Finalizar Comprar</button>
                  </CartFooter>
                  
                </SheetDescription>

                  
                
            </SheetContent>
          </Sheet>

        </Header>

        <Component {...pageProps} />
      </ProductsProvider>
    </Container>
  )
}
