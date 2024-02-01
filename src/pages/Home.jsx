import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import Category from '../components/Category'
import CoverImg from "./../assets/images/cover-img.png"

const colors = ["bg-green", "bg-blue",  "bg-purple", "bg-yellow"]
export default function Home() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        // categories
        fetch("https://fakestoreapi.com/products/categories").then((res) => {
            return res.json();
        }).then((data) => {
            setCategories(data)
        })

        // products
        fetch("https://fakestoreapi.com/products").then((res) => {
            return res.json();
        }).then((data) => {
            setProducts(data)
        })

    }, [])


    return (
        <>
        
            <section className="categories-section">
                <div className="container">
                    <div className="row">
                        {
                            categories.map((item, pos) => {
                                return <Category key={pos} category={item} />
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="products">
                <img src={CoverImg} className="cover" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h3>All Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            products.map((item, pos) => {
                                return <Product key={pos} product={item} color={colors[pos]} />
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
