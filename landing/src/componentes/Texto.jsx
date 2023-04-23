import diseño from "../Styles/diseño.css";
import ImgDona from "../Assets/LOGODONUTS.png";


const Texto = () => {
  return (
    <>
    <center>
    <div> <h1 className="Titulo"> Little Donuts </h1>   </div>
    </center>


    <div> <h5 className="Parrafos"> Historia </h5></div>
    <div> <p className='Parrafos'> Fundada por 2 emprendedores mexicanos Maria Fernanda y Alexis Rios todo comenso como un juego en postres 
    pero un dia Fernanda se le ocurrio crear las Famosas Donitas de azucar con el tiempo los chicos fueros mejorando la receta secreta 
    con decoraciones en la dona y mejorando el sabor del producto hasta empezar a invertir en su propio negocio hoy en dia 
    Little Donuts tiene 1 Mes de su creacion </p></div>

    <div className="divimg" >
        <img className="Imagen1"  src={ImgDona} alt="" />
        </div>
    </>
   

  )
}

export default Texto