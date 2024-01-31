import React from 'react'
import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { BsPersonCircle } from "react-icons/bs"

import CTAImg from "../assets/images/cta-img.jpg"
import Nav from './partials/Nav'


export default function Header() {
    return (
        <>

            <header>
                <Nav/>
                <section className="header-cta">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="cta mb-4">
                                    <h1>
                                        Exclusive Deals of Furniture Collection
                                    </h1>
                                    <p>
                                    Explore different categories. Find the best deals.
                                    </p>
                                    <a href="#" className="btn btn-primary">Shop Now</a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <img src={CTAImg} className="w-100" />
                            </div>
                        </div>
                    </div>
                </section>
            </header>

        </>
    )
}
