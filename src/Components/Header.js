import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = () => {

  const [customIcon, setcustomIcon] = useState(<i id="custom-icon" className=" material-icons">dehaze</i>)

  const handleClick = (e) => {
    e.preventDefault()
   const toggler = document.getElementById('mobile-toggle')
   toggler.classList.toggle('show')
   if(toggler.classList.contains('show')){
       setcustomIcon(<i id="custom-icon" className=" material-icons">clear</i>)
   }
   else{
      setcustomIcon(<i id="custom-icon" className=" material-icons">dehaze</i>)
   }
  }


    return (
        <motion.div initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{ duration: 0.9 }}  >
             <nav>
                 <div className="container">
                        <div class="nav-wrapper">
                        <Link to="/" class="brand-logo"><i className="large material-icons">cloud_done</i></Link>
                        <ul class="right hide-on-med-and-down">
                            <Link t='/register'>Register</Link>
                        </ul>
                        <ul class="side-nav" id="mobile-demo">
                            <li onClick={handleClick}
                            className="togller">
                             {customIcon}
                            </li>
                            <li id="mobile-toggle">
                              <ul>
                                <Link to="/register">Register</Link>
                              </ul >
                           </li>
                        </ul>
                        </div>
                 </div>
                </nav>
        </motion.div>
    )
}

export default Header
 