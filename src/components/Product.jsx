import React from 'react'

export default function Product(props) {
  return (
    <div className="col-md-3">
      <div className={`card card-body mb-5 ${props.color}`}>
        <img src={props.product.image} alt="" />
        <div className="footer">
          <h4>{props.product.title}</h4>
          <p>
            {props.product.category}
          </p>
          <span>{props.product.price} DH</span>
        </div>
      </div>
    </div>
  )
}
