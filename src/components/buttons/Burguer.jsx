import React from 'react';
import menuBurguer from '../../assets/images/menuBurguer.svg';

function Burguer({toggleValue}) {
  return (
   <div className='burguerDiv'>
   <button className='burguer' onClick={toggleValue}><img  src={menuBurguer} alt="menuBurguer"/></button>
   </div>
  )
}

export default Burguer