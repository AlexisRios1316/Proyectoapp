import {Routes, Route} from "react-router-dom"
import {Home} from "../views/Home"
import {About} from "../views/About"
import {Formulario} from "../views/Formulario"




// Routes : Componente envuelve todas las rutas 
// Route : Define una ruta 
 export const AppRoutes = () => {
  return (
   <Routes>
<Route path="/" element={<Home/> }/>

<Route path="/about" element={<About/> }/>

<Route path="/formulario" element={<Formulario/> }/>
   </Routes>
  )
}

export default AppRoutes