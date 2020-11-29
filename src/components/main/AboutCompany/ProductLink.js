import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getRandomExample, randomInteger} from './src/randomExample'


class ProductLink extends React.Component {
   constructor(props){
       super(props);
       this.props = props;
   } 
   render(){
        const randomExample = getRandomExample(this.props.exampleWork.exampleWork);
        if(this.props.exampleWork.loading){
            return (
                <div>
                    <p>Загрузка</p>
                </div>
            )
        }
       return(
           <div>
                <h3>Примеры наших услуг</h3>
                <ul>
                    {randomExample.map(item => (
                        <div>
                            <li key={item._id}><Link to={`/service/`+item._id}>{item.Name}</Link></li>
                            <img src={item.MassImg[randomInteger(0,item.MassImg.length-1)]} alt="Not found" width="300" height="200"/>
                        </div>))}
                </ul>
           </div>
       )
   }
}

const mapStateToProps = state => {
    return {
        exampleWork : state.exampleWork
    }
}

export default connect(mapStateToProps,null)(ProductLink)