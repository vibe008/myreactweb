import React from 'react'

export default function Navbar(props) {

  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.heading}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    
  <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" onChange={props.change} htmlFor="flexSwitchCheckDefault">  </label>
  </div>
  
  </div>

</nav>
  )
}

