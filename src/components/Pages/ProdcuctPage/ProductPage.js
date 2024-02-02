import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
// console.log(productID);
  useEffect(() => {
    fetch("http://localhost:4000/get-products")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched data:", data);
        const productList = data;
        // console.log(productList);
        const singleProduct = productList.filter(
          (product) => product.product_url === productID
        );
        setProduct(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch"));
  }, [productID]);

    console.log("Product state:", product);
  if(product.length){
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {product?.map((product, i) => (
              <div
                key={product.product_url}
                className="row justify-content-center text-center "
              >
                <div className="col-12 mt-5 pt-5">
                  <div className="title-wraper font-weight-bold">
                    {product.product_name}
                  </div>
                  <div
                    style={{ fontWeight: "600", fontSize: "18px" }}
                    className="product-brief pb-3"
                  >
                    {product.product_brief_description}
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="starting-price">
                        {`Starting at ${product.starting_price}`}
                      </div>
                      <div className="monthly-price">{product.price_range}</div>
                      <div className="product-details">
                        {product.product_description}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="prodict-image">
                        <img src={product.product_img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
} else {
      return <Four04 />

  }
}
export default ProductPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04";

// function ProductPage() {
//   const [product, setProduct] = useState(null);
//   const { productID } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:4000/get-products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched data:", data);

//         if (Array.isArray(data.products)) {
//           console.log("Products array:", data.products);

//           const singleProduct = data.products.find(
//             (product) => product.product_url === productID
//           );

//           console.log("Single product found:", singleProduct);

//           if (singleProduct) {
//             setProduct(singleProduct);
//           } else {
//             setProduct(null);
//             console.log("Product not found");
//           }
//         } else {
//           console.error("Error: No products array found in the response");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [productID]);
//   console.log(product);
//   return (
//     <div>
//       {product ? (
//         <div>
//           <h1>{product.product_name}</h1>
//           <p>{product.product_description}</p>
//         </div>
//       ) : (
//         <Four04 />
//       )}
//     </div>
//   );
// }

// export default ProductPage;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04";

// function ProductPage() {
//   const [product, setProduct] = useState(null);
//   const { productID } = useParams();

//   useEffect(() => {
//     fetch("http://localhost:4000/get-products")
//       .then((res) => res.json())
//       .then((data) => {
//         const productList = data;
//         const singleProduct = productList.find(
//           (product) => product.product_url === productID
//         );

//         if (singleProduct) {
//           setProduct(singleProduct);
//         } else {
//           setProduct(null);
//         }
//       })
//       .catch(() => console.log("Error: unable to fetch"));
//   }, [productID]);

//   return (
//     <div>
//       {product ? (
//         <div>
//           <section className="internal-page-wrapper top-100 pt-5">
//             <div className="container">
//               <div className="row justify-content-center text-center">
//                 <div className="col-12">
//                   <div
//                     style={{ padding: "1rem" }}
//                     className="title-wraper bold"
//                   >
//                     {product.product_name}
//                   </div>
//                   <div
//                     style={{ padding: ".5rem" }}
//                     className="brief-description"
//                   ></div>
//                 </div>
//               </div>
//               <div className="row justify-content-center text-center product-holder h-100 top-100 bottom-100">
//                 <div className="col-sm-12 col-md-6 my-auto order-2">
//                   <div className="product-title">{product.product_name}</div>
//                   <div className="product-brief">
//                     {product.product_brief_description}
//                   </div>
//                   <div className="starting-price">
//                     {`Starting at ${product.starting_price}`}
//                   </div>
//                   <div className="monthly-price">{product.price_range}</div>
//                   <div className="product-details">
//                     {product.product_brief_description}
//                   </div>
//                 </div>
//                 <div className="col-sm-12 col-md-6">
//                   <div className="product-image">
//                     <img src={product.product_img} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       ) : (
//         <Four04 />
//       )}
//     </div>
//   );
// }

// export default ProductPage;
