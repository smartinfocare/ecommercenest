import { useState } from "react"

export default function Product(props){
const [data, setData] = useState(props.products.data)
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
                    <img class="img-responsive"src="http://localhost:3000/denny-muller-s9zGsWDiFO4-unsplash.jpg" />
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
                          <button type="button" class="btn btn-outline-danger btn-sm">View Detail</button>
                      </div>
                  </div>
                </div>
            
            </div>
        </div>
         ):(data.map(product=>
               
            <div class="col-md-3 mt-5" key={product.id}>
                <div class="card">
                    <div class="card-img item-zoom">
                        <img class="img-responsive"src="http://localhost:3000/denny-muller-s9zGsWDiFO4-unsplash.jpg" />
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
                              <button type="button" class="btn btn-outline-danger btn-sm">View Detail</button>
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