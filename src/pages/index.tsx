import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product, TitleProduct } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import Stripe from "stripe";
import { Handbag } from "@phosphor-icons/react";
import { Product as ProductContext, ProductsContext } from "../contexts/ProductsContext";
import { useContext } from "react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const { addProduct } = useContext(ProductsContext)

  function handleAddProduct(product: ProductContext) {
    console.log(product)
    addProduct(product)
  }


  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product 
              key={product.id}
              className="keen-slider__slide"
            >
              <Image src={product.imageUrl} width={520} height={480} alt=""/>
              
              <footer>
                <TitleProduct 
                  href={`/product/${product.id}`}
                  prefetch={false}
                >
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </TitleProduct>
                <button title="Colocar na sacola" onClick={() => handleAddProduct(product)}>
                  <Handbag size={32} weight="bold"/>
                </button>
              </footer>
            </Product>
          )
         })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100 ): 0,
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}