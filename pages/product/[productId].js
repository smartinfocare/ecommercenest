import { useRouter } from 'next/router'
import  {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
const ProductId = () => {
  debugger
  const router = useRouter()
   const data = JSON.parse(router.query.data)
   const [img, setImg] = useState(data.images)
//debugger
  return (
    <>
    <Navbar/>
  <div class="container">
  <div class="card mycard">
    <div class="container-fliud">
      <div class="wrapper row">
        <div class="preview col-md-6">
          
          <div class="preview-pic tab-content">
              <div class="tab-pane active" id={`pic-${img[0].id}`}><img src={img[0].standard_url} /></div>
            </div>
     

          <ul class="preview-thumbnail nav nav-tabs">
            {img.slice(0,6).map(ele=>
            <li class="active myFirstImg" key={ele.id}><a data-target={`#pic-${ele.id}`} data-toggle="tab"><img src={ele.zoom_url} /></a></li>
            )}
          </ul>
          
        </div>
        <div class="details col-md-6">
          <h3 class="product-title">{data.name}</h3>
          <div class="rating">
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <span class="review-no text-success">{data.availability}</span>
          </div>
    <p>  {data.description}</p> 
          <h4 class="price">current price: <span>${data.price}</span></h4>
          <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
          <div class="action">
            <button class="add-to-cart btn btn-default" type="button">add to cart</button>
            <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
export default ProductId;  
