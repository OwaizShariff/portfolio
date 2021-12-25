import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./All.css"
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navdiv'>
            <h1 className='h1'>OWAIZ SHARIFF</h1>
            
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <h1><Link to={'/About'}>About</Link></h1>
           <h1><Link to={'/Skills'}>Skills</Link></h1>
           <h1><Link to={'/Tools'}>Tools</Link></h1>
           </div>
           <div style={{paddingTop:"20px"}}>
            <GitHubIcon />
            <LinkedInIcon />
            <InstagramIcon/>
            </div>
        </div>
    )
}

export default Navbar
