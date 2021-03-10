import React from 'react';
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux';
import {getRandomExample} from './src/RandomExample';
import ProductCard from './productCard';


class ProductLink extends React.Component {
   constructor(props){
       super(props);

   } 
   render(){
        if(this.props.exampleWork.loading){
           return (
               <p>Загрузка</p>
               )
            }
        let randomExample = [];
        if (this.props.random){
            randomExample = getRandomExample(this.props.exampleWork.exampleWork);
        } else {
            randomExample = this.props.exampleWork.exampleWork;
        }
        return(
           <div>
                <h2>Примеры наших услуг</h2>
                    <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
                        {randomExample.map((item,index) => (
                                <div key={index}><ProductCard item={item} /></div>    
                        ))}
                    </Box>
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