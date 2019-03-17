import React, { Component } from 'react'
import {Link} from 'gatsby'
export default class navbar extends Component {
  state = {
navbarOpen:false,
css:'nav-container',
links:[
    {
        id:1,
        path:'/',
        text:'Accueil'
    },
    {
        id:2,
        path:'/contactez-nous',
        text:'Contactez-nous'
    }
]
  };
  navbarHandler = () => {
      console.log("hello");
      
  }
  
  
    render() {
    return (
        <div className="nav-container">
        <nav>
        <Link to="/" className="logo">
        I-Maginer
       </Link> 
    
       <div>
           <ul className="main-menu">
               {
                   this.state.links.map(link => {
                       return (
                           <li key={link.id}>
                           <Link to={link.path}>
                           {link.text}
                           </Link>
                           </li>
                       )
                   })
               }

           </ul>

       </div>
        </nav>
       
        </div>
    )
  }
}
