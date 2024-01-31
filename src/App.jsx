import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Product from "./components/Product";
import CoverImg from "./assets/images/cover-img.png"

const colors = ["bg-green", "bg-blue",  "bg-purple", "bg-yellow"]

function App() {

  return (
    <>
      <Header />

      <section className="categories-section">
        <div className="container">
          <div className="row">
            <Category />
            <Category />
            <Category />
            <Category />
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
              [1, 2, 3, 4].map((item, pos) => {
                return <Product key={pos} color={colors[pos]}/>
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App
