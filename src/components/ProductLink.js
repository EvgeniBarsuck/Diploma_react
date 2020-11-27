import React from 'react';
import { Link } from 'react-router-dom';


export default class ProductLink extends React.Component {
   constructor(props){
       super(props)
   } 
   render(){
       return(
           <div>
                <h3>Примеры наших услуг</h3>
                 <ul>
                    <li><Link to='/service'>Варик 1</Link></li>
                    <li><Link to='/service'>Варик 2</Link></li>
                    <li><Link to='/service'>Варик 3</Link></li>
                </ul>
           </div>
       )
   }
}