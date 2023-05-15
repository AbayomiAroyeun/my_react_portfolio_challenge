import React from 'react';
function Header() {
return(
<div className='AboutMe'>
    <img src={require('../image/face1.jpg')} alt='main' className='mainimage' />
   <div className='Nav'>
    <div id='Me'>Abayomi</div>
    <div id='A'>AboutMe</div>
    <div id='p'>Portfoilio</div>
    <div id='R'>Resume</div>
    <div id='C'>Contact</div>
</div>
</div>
    

);

}

export default Header;