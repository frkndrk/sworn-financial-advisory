import "./topbar.scss"
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="contTB">
        <div className="addresBar">
          <ul>
            <li style={{color: "rgb(28, 65, 119)"}}><LocationOnIcon fontSize="small" style={{marginRight: "5px", color: "rgb(28, 65, 119)"}}/>{/* Mustafa Kemal Mah. 2131 Cad.  */}Nurdağ Plaza No:30/16 Çankaya/ANKARA</li>
            <li><EmailIcon fontSize="small" style={{marginRight: "5px", color: "rgb(28, 65, 119)"}} /> <a href="mailto:Mehmet.ozturk@mcpartners.com" style={{textDecoration: "none", color: "rgb(28, 65, 119)"}}>Mehmet.ozturk@mcpartners.com</a></li>
          </ul>
        </div>
        <div className="phoneNum">
          <span><CallIcon /></span>
          <p>0 506 313 31 37</p> 
        </div>
        <div className="icons">
          <ul>
            <a href="https://twitter.com/EnesKarakurt_10" target="_blank" style={{color: "rgb(28, 65, 119)"}}><li><TwitterIcon fontSize="10px"/></li></a>
            <a href="https://www.linkedin.com/in/eneskarakurt/" target="_blank" style={{color: "rgb(28, 65, 119)"}}><li><LinkedInIcon fontSize="10px"/></li></a>
            <a target="_blank"><li><InstagramIcon fontSize="10px" style={{color: "rgb(28, 65, 119)"}}/></li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar