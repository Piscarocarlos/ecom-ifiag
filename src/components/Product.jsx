import React from 'react'
import ProductImage from "../assets/images/product.png"

export default function Product(props) {
  return (
    <div className="col-md-3">
      <div className={`card card-body mb-5 ${props.color}`}>
        <img src={ProductImage} alt="" />
        <div className="footer">
          <h4>Product Name</h4>
          <p>
            Description du produit
          </p>
          <span>145 DH</span>
        </div>
      </div>
    </div>
  )
}
