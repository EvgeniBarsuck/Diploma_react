import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class ProductLink extends React.Component {
   constructor(props){
       super(props);
       this.props = props;
       console.log(this.props);
   } 
   render(){
       return(
           <div>
                <h3>Примеры наших услуг</h3>
                <ul>
                    {this.props.exampleWork.map(item => (<li><Link to={`/service/`+item._id}>{item.Name}</Link></li>))}

                </ul>
           </div>
       )
   }
}

const mapStateToProps = state => {
    return {
        exampleWork : state.exampleWork.exampleWork
    }
}

export default connect(mapStateToProps,null)(ProductLink)