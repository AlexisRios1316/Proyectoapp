import Dona1 from "../Assets/1.jpeg";
import Dona2 from "../Assets/2.jpeg";
import Dona3 from "../Assets/3.jpeg";
import diseño from "../Styles/diseño.css";

const Cards = () => {
  return (
    <>
<div className="contentDona">


</div>


    <div class="card-group">
  <div class="card">
    <img src={Dona1} class="card-img-top"/>
    <div class="card-body">
      <h5 class="card-title">Caja 8 Donas</h5>
      <p class="card-text"> Charola con 8 donas sabor canela y vainilla con un toque de dulcura cubiertas de chocolate o chocolate rosa algun topping al gusto </p>
      <p class="card-text"><small class="text-body-secondary">Imagen actualizada 23/04/2023</small></p>
    </div>
  </div>
  <div class="card">
    <img src={Dona2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Presentacion de la charola </h5>
      <p class="card-text">La charola cuenta con una pegatina para que nos sigas en nuestras redes sociales.</p>
      <p class="card-text"><small class="text-body-secondary">Imagen actualizada 23/04/2023</small></p>
    </div>
  </div>
  <div class="card">
    <img src={Dona3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Caja 8 Donas</h5>
      <p class="card-text"> Charola con 8 donas sabor canela y vainilla con un toque de dulcura cubiertas de chocolate o chocolate rosa algun topping al gusto.</p>
      <p class="card-text"><small class="text-body-secondary">Imagen actualizada 23/04/2023</small></p>
    </div>
  </div>
</div>
<div className="contentDona">


</div>

    </>
  
  )
}

export default Cards