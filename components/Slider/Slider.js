
export default function Slider(){
    return(
       <div >
    <div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
  <li data-target="#demo" data-slide-to="3"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img className="carasual-img"src="http://localhost:3000/lance-asper-N9Pf2J656aQ-unsplash.jpg" alt="Los Angeles" />
  </div>
  <div class="carousel-item">
    <img className="carasual-img"src="http://localhost:3000/erik-mclean-ZRns2R5azu0-unsplash.jpg" alt="Chicago" />
  </div>
  <div class="carousel-item">
    <img className="carasual-img"src="http://localhost:3000/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg" alt="New York" />
  </div>
  <div class="carousel-item">
    <img className="carasual-img"src="http://localhost:3000/yash.jpg" alt="New York" />
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>
    </div>
    )
}