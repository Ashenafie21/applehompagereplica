import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Iphone() {
  const [products, setProducts] = useState([]);
  // useEffect (()=>{
  //   fetch("http://localhost:4000/get-products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.products);
  //     })
  //     .catch(() => console.log("Error: unable to fetch"));
  // },[]);
  useEffect(() => {
    fetch("http://localhost:4000/get-products")
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        // console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);
  // console.log(products);
  let flip = true;
  return (
    <div>
      <section className="internal-page-wrapper top-100 pt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div style={{ padding: "1rem" }} className="title-wraper bold">
                Iphones
              </div>
              <div style={{ padding: ".5rem" }} className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product, i) => {
            // let order1 = 1;
            // let order2 = 2;
            // if (flip) {
            //   order1 = 2;
            //   order2 = 1;
            //   flip = !flip;
            // } else {
            //   flip = !flip;
            // }
            let productDiv = (
              <div
                key={product.product_url}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    i % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">
                    {product.product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${product.starting_price}`}
                  </div>
                  <div className="monthly-price">{product.price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_url}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`col-sm-12 col-md-6 order-${
                    i % 2 === 0 ? "1" : "1"
                  }`}
                >
                  <div className="prodict-image">
                    <img src={product.product_img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
