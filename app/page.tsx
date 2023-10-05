import React from 'react'
import Banner from './components/Banner'
import { getProducts } from '@/helpers'

const page = async () => {
  const products = await getProducts();
  return <>
    <Banner />

    <hr className="my-20 h-px border-0 bg-gray-300" />

  </>
}

export default page