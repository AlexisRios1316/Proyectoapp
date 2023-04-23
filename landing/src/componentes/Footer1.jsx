import "../Styles/footer.css";

 const Footer1 = () => {
  return (
   
<>
    <footer classNameName="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">github.com/AlexisRios1316 <i>Alexis Rios </i> <br></br>Littel Donuts MX producto nacional y casero echo con un toque de dulsura </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Home</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">About</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Formulario</a></li>
            </ul>
          </div>

          
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">AlexisRios</a>.
            </p>
          </div>

         
        </div>
      </div>
</footer>

</>

  )
}

export default Footer1