import React from 'react'
import cross from '../../assets/images/cross.svg'

function Close({toggleValue}) {
  return (
   <>
   <button className='crossButton' onClick={()=>toggleValue(false)}><img className="cross" src={cross} alt="closeButton" /></button>
   </>
  )
}

export default Close