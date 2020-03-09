import React from 'react'
import { ProductConsumer } from '../context';


export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {
          value =>  <h1>{console.log(value)}</h1>
        }
      </ProductConsumer>
    </>
  )
}
