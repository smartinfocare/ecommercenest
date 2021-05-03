import { useState } from "react"
import Link from 'next/link'
export default function Product(props){
const [data, setData] = useState(props.products)
const [count, setCount] = useState(0)
const [isLoad, setIsLoad] = useState(true);
const showAll =()=>{
    isLoad == true ? setIsLoad(false) :setIsLoad(true);
}
    return(
        <>
        <h1 className="text-center mt-5">PRODUCTS</h1>
        <div className="container mt-5">
            
        <div class="row mt-5">
            {isLoad== true? data.slice(0, 8).map(product=>   
        <div class="col-md-3 mt-5" key={product.id}>
            <div class="card">

                <div class="card-img item-zoom">

<div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators" >
{product.images.map(img=> 
    <li data-target="#demo" key={img.id} data-slide-to={count} ></li>
    )}
  </ul>

<div class="carousel-inner">
{product.images.map(img=> 
  <div class="carousel-item active"  key={img.id}>
  <img src={img.standard_url} />
  </div>
  )}
</div>  

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
  
                </div>
          
                <div class="card-body">
                <div class="card-title">
                    <span><i class="fa fa-map-marker"></i>{product.name.substring(8)} </span>
                    <h5>{product.price}$</h5>
                    <ul class="list-inline ">
                    <li class="list-inline-item text-success"><i class="fa fa-clock-o "></i>{product.availability}</li><br/>
                </ul>
                </div>
              
                </div>
                <div class="card-footer">
                  <div class="row">
                      <div class="col-md-6">
                          <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
                      </div>
                      <div class="col-md-6">
                          <button type="button" class="btn btn-outline-danger btn-sm"><Link className="mylink" href={{ pathname: `/product/${product.id}`, query: { data: JSON.stringify(product) } }}>View Detail        </Link></button>
                      </div>
                  </div>
                </div>
            
            </div>
        </div>
         ):(data.map(product=>
               
            <div class="col-md-3 mt-5" key={product.id}>
                <div class="card">
                <div class="card-img item-zoom">

<div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
<div class="carousel-inner">
{product.images.map(img=> 
  <div class="carousel-item active"  key={img.id}>
  <img src={img.standard_url} />
  </div>
  )}
</div>  

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
  
                </div>
                    <div class="card-body">
                    <div class="card-title">
                        <span><i class="fa fa-map-marker"></i>{product.name.substring(8)} </span>
                        <h5>{product.price}$</h5>
                        <ul class="list-inline ">
                        <li class="list-inline-item text-success"><i class="fa fa-clock-o "></i>{product.availability}</li><br/>
                    </ul>
                    </div>
                  
                    </div>
                    <div class="card-footer">
                      <div class="row">
                          <div class="col-md-6">
                              <button type="button" class="btn btn-outline-secondary btn-sm">Contact Seller</button>
                          </div>
                          <div class="col-md-6">
                          <button type="button" class="btn btn-outline-danger btn-sm"><Link className="mylink" href={`/product/${product.id}`}>View Detail        </Link></button>
                      </div>
                      </div>
                    </div>
                
                </div>
            </div>))}
	</div>
        <button className="btn mt-5 view-btn"  onClick={() => showAll()}>view more</button>
    </div>
        </>
    )
}