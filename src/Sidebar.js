import React from 'react'
import './style.css'

const Sidebar = () => {
  return (
    <div className='bg-white sidebar'>
        <div className='m2'>
      <i className='bi bi-bootstrap-fill my-2 me-2 fs-4'></i>
      <span className='brand-name fs-4'>Keith Matewa</span>
    </div>
    <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
            <a className='list-group-item list-group-item-action py-2'>
                <i className=' bi bi-speedometer2 fs-5 me-2'></i>
                <span>Think Design-DashBoard</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-house fs-4 me-2'></i>
                <span className='fs-5'>HOME</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-table fs-5 me-2'></i>
                <span className='fs-5'>Products</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-clipboard fs-5 me-2'></i>
                <span className='fs-5'>Report</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-people fs-5 me-2'></i>
                <span className='fs-5'>Customers</span>
            </a>
            <a className='list-group-item list-group-item-action py-2'>
                <i className='bi bi-power fs-5 me-2'></i>
                <span className='fs-5'>LogOut</span>
            </a>

        </div>
    </div>

  )
}

export default Sidebar
