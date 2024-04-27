import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <NavBar/>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <Outlet/>
                 </div>
            </div>
        </div>
    </>
  )
}

export default Layout