import diseño2 from "../Styles/formdiseño.css";
import { useEffect, useState } from "react";
import { addReservation } from "../utils/dynamodb";

const Formulario2 = () => {
    const [form, setform] = useState({
        name:'',
        email:'',
        pedidos:'',
        sabores:'',
        telefono:''
          })
  return (
    <>
    <div className="conenedorform">

    </div>
    <center>
    <form action="" classNameName="formulario">
  <h1 className="formulario__titulo">Contáctenos</h1>
  <input type="text" className="formulario__input" value={form.email} onChange={(evt)  =>  setform ({...form, email:evt.target.value})} />
  <label for="" className="formulario__label">Correo</label>
  

  
  <input type="text" className="formulario__input"  value={form.name}  onChange={(evt) => setform ({...form, name:evt.target.value})} />
  <label for="" className="formulario__label">Nombres</label>

  
  <input type="text" className="formulario__input" value={form.pedidos}  onChange={(evt)  =>  setform ({...form, pedidos:evt.target.value})} />
  <label for="" className="formulario__label">Pedidos</label>
 
  <input type="text" className="formulario__input" value={form.sabores}  onChange={(evt)  =>  setform ({...form, sabores:evt.target.value})} />

  <label for="" className="formulario__label">Sabores</label>
  
  <input type="text" className="formulario__input"  value={form.telefono}  onChange={(evt)  =>  setform ({...form, telefono:evt.target.value})} />
  <label for="" className="formulario__label">Telefono</label>
 



  <input type="submit" className="formulario__submit" onClick={(evt) => {
   evt.preventDefault()
    addReservation({
        id_reservacion:2,
        Email: form.email,
        Nombre:form.name,
        Pedidos: form.pedidos,
        Sabores: form.sabores,
        Telefono: form.telefono
    })
    setform({
        Email:"",
        Nombre:"",
        Pedidos: "",
        Sabores: '',
        Telefono: ''  
    })
  }}/>
</form>
</center>
<div className="conenedorform"></div>
    </>
  )
}

export default Formulario2