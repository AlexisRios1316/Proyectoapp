import fondo12 from "../Assets/fondo1.jpeg";
import fondo13 from "../Assets/fondo2.jpeg";
import fondo14 from "../Assets/qwe3.jpeg";

 export const Carrusel = () => {
  return (
    <>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={fondo12} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={fondo13} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={fondo14} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  )
  
}

export default Carrusel