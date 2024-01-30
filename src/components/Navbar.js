import React from 'react'
// import PropTypes from 'prop-types';
// import{Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"></a>
        </li>
        
        
      </ul>
      {/* <div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Choose Theme</option>
          <option value="1">Black</option>
          <option value="2">Blue</option>
          <option value="3">Green</option>
        </select>
      </div> */}
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
// Navbar.propTypes = {
//     title : PropTypes.string,
//     about : PropTypes.string
// }
// Navbar.defaultProps  = {
//     title: 'Title here',
//     about: 'about here'
// }