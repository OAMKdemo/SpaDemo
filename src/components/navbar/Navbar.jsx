import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className="navbar md:navbar-expand bg-1">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body mb-2 md:mb-0">
        <ul className="nav navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>  
          <li className="nav-item">
            <Link className="nav-link" to="/settings">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </dialog>
  </div>
</nav>
  )
}
