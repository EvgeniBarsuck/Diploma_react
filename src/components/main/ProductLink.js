import React from 'react';
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux';
import {getRandomExample} from './src/RandomExample';
import ProductCard from './productCard';


class ProductLink extends React.Component {
   constructor(props){
       super(props);
       this.props = props;
   } 
   render(){
        const randomExample = getRandomExample(this.props.exampleWork.exampleWork);
        if(this.props.exampleWork.loading){
            return (
                    <p>Загрузка</p>
            )
        }
       return(
           <div>
                <h3>Примеры наших услуг</h3>
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