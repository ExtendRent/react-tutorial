import React from 'react'
import "./ProductCard.css"

export default function ProductCard(props) {
  return (
    <div className={"product-card " + props.classes}>
      <img src="https://m.media-amazon.com/images/I/817xnvwK0PL._AC_UF1000,1000_QL80_.jpg" />
      <p>{props.name}</p>
      <span>{props.price} tl</span>
    </div>
  )
}
