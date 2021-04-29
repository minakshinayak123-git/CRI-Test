import React from 'react'
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIcon">
      <CallRoundedIcon/><span>Toll free 1800 200 1234</span>
      
        </div>
        <div className="footerIcon">
          <FacebookIcon/><span>www.facebook.com/cripumps</span>
        </div>
        <div className="footerIcon">
          <LanguageRoundedIcon/><span>www.crigroups.com</span>
        </div>
     
    </div>
  )
}

export default Footer
