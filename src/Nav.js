import React from 'react'
import 'bootstrap/js/dist/dropdown'

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg white px-3">
        <i className='navbar-brand bi bi-justify-content fs-5' href="#">Keith DashBoard</i>
        <button className='navbar-toggler d-lg none' type="button" data-bs-toggle="collapse" data-bs arial-aria-expanded="false" aria-label='Toggle navigation'></button>
        <div className='collapse nav-collapse' id='collapsibleNavId'>
            <ul className='navbar-nav ' ms-auto mt-2 mt-lg-0>
                <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href="#" id="dropdownId" 
                    data-bs-toggle="dropdown" aria-aria-haspopup="true" aria-expanded="false">
                        Keith
                    </a>
                    <div className="dropdown-menu" aria-labelledby='dropdownId'>
                        <a className='dropdown-item' href='#'Profile></a>
                        <a className='dropdown-item' href='#'>Setings</a>
                        <a className='dropdown-item' href='#'>Log-Out</a>
                    </div>
                </li>
            </ul>
            <form className='d-flex my-2 my-lg-0'>
            <input className='form-control me-sm-2' type='text' placeholder='search'/>
            </form>
        </div>
    </nav>

  )
}

export default Nav
