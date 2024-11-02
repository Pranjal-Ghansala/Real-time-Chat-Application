import React from 'react'
import Conversations from "../sidebar/Conversations";
 
import LogoutButton from '../sidebar/LogoutButton';

const MenuBar = () => {
  return (
    <div className=' sm:border-r sm:border-slate-500 sm:p-4 sm:flex sm:flex-col  relative z-40'>
     
            
      <div className='divider px-3'></div>
			<Conversations  />
            <div className='mt-2'>
                <LogoutButton/>
            </div>
    </div>
  )
}

export default MenuBar
