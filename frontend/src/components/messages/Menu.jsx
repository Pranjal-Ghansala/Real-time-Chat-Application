import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuBar  from './MenuBar';

const Menu = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prevState) => !prevState); // Toggle the state
      };
    
  return (
    <div className='absolute top-[10px] right-[12px] sm:hidden'> 
        <div  onClick={toggleVisibility}>
       <FontAwesomeIcon icon={faBars}/>
       {isVisible && <MenuBar  />}
       </div>
    </div>
  )
}

export default Menu
