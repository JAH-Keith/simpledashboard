import React from 'react'
import Nav from './Nav'


const Home = () => {
  return (
    <div className='row g-3 my-2'>
      <Nav/>
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
            <div className='col-3-md-3 p-1'>
                <div className='p3 gb-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
                    <div>
                      <h3 className='fs-2'>320</h3>
                      <p className='fs-5'>Products</p>  
                    </div>
                    <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
            </div>
            <div className='col-3-md-3 p-1'>
                <div className='p3 gb-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
                    <div>
                      <h3 className='fs-2'>500</h3>
                      <p className='fs-5'>Sales</p>  
                    </div>
                    <i className='bi bi-cart-plus p-3 fs-1'></i>
                </div>
            </div>
            <div className='col-3-md-3 p-1'>
                <div className='p3 gb-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
                    <div>
                      <h3 className='fs-2'>45</h3>
                      <p className='fs-5'>Delivaries</p>  
                    </div>
                    <i className='bi bi-truck p-3 fs-1'></i>
                </div>
            </div>
            <div className='col-3-md-3 p-1'>
                <div className='p3 gb-white shadow-sm d-flex justify-content-around align-items-center-rounded'>
                    <div>
                      <h3 className='fs-2'>25%</h3>
                      <p className='fs-5'>Increase</p>  
                    </div>
                    <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                </div>
            </div>
        </div>
      </div>
      <table class="table caption-top bg-white rounded">
        <caption>Recent -Orders</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Ocupation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Khiwa</td>
      <td>Machiridza</td>
      <td>Software Engineer</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Keith</td>
      <td>Matewa</td>
      <td>Data Analysist</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Boredman</td>
      <td>Networks Administrator</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Home
