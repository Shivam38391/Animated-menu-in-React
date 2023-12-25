import React from 'react'
import './style.scss'
import Menu from '../Menu/Menu'

function Header() {
  return (
    <>
    <div className="header-wrap">
        <p className='brand-descriptions'>
        Digital experience design studio
        </p>

        <Menu/>
    </div>
    </>
  )
}

export default Header