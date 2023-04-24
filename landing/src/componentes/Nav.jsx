import { Link } from "react-router-dom"
import About from "../views/About"
import Formulario from "../views/Formulario"
import Home from "../views/Home"
import diseño from "../Styles/Nav1.css";



 export const Nav = () => {
  return (
    <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" >Llttle Donuts  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active"  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/formulario">Formulario</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
      </form>
    </div>
  </div>
</nav>

    </header>
  )
}

export default Nav