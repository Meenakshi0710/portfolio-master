import React from 'react'


const Navbar = () => {
  
  return (
   <>
  <nav className="navbar navbar-expand-sm navbar-light fixed-top  bg-light" id = "navbar">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">🅼🅴🅴🅽🅰🅺🆂🅷🅸</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
	<ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#home" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects" >Projects</a>
        </li>
		<li className="nav-item">
          <a className="nav-link" href="#skill" >Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact" >Connect me</a>
        </li>
        
      </ul>
    </div>
    </div>
	</nav>
   </>
  )
}

export default Navbar