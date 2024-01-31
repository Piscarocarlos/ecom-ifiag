import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import Logo from "../../assets/images/logo.png"

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container d-flex align-items-center">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <ul className="list-inline header-icons mt-2">
                        <li className="list-inline-item">
                            <a href="#"><FiSearch className="primary-color fs-5" /></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#"><FiShoppingCart className="primary-color fs-5" /></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#"><BsPersonCircle className="primary-color fs-5" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
