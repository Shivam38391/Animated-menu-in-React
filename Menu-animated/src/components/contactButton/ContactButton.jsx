import React from 'react'
import './style.scss'
import { Plus } from 'react-feather'

function ContactButton() {
  return (
 
    <>
    
    <button className='contact-button'>

        <span>Contact us 
          <Plus></Plus>
        </span>

    </button>
    </>


  )
}

export default ContactButton