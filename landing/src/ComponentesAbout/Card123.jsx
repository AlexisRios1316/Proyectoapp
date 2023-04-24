import ImgDona2 from "../Assets/qwe1.jpeg";
import ImgDona3 from "../Assets/qwe2.jpeg";
import ImgDona4 from "../Assets/qwe3.jpeg";
import ImgDona5 from "../Assets/qwe4.jpeg";
import diseño2 from "../Styles/formdiseño.css";

const Card123 = () => {
  return (
    <>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={ImgDona2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tridente de Donas</h5>
        <p class="card-text"> Prueba nuestras nuevas Donas 3 sabores diferentes chocolate blanco, chocolate, chocolate rosa </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ImgDona3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dona Galleta</h5>
        <p class="card-text">Dona Galleta la especialidad de la casa te va a gustar </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ImgDona4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tridente de Donas</h5>
        <p class="card-text">Prueba nuestras nuevas Donas 3 sabores diferentes chocolate blanco, chocolate, chocolate rosa.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ImgDona5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dona Galleta</h5>
        <p class="card-text">Dona Galleta la especialidad de la casa te va a gustar</p>
      </div>
    </div>
  </div>
</div>
<div className="conenedorform"></div>
    </>
  )
}

export default Card123