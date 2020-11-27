import React from 'react';
import Information from './Information';
import {getAboutCompanyActions} from '../redux/aboutCompany/aboutCompanyActions'
import {getExampleWork} from '../redux/exampleWork/exampleWorkActions'
import {connect} from 'react-redux';
import StickCarousel from './StickCarousel';
import ProductLink from './ProductLink';


class App extends React.Component{
    render() {
        return (
            <div>
                    <Information/>
                    <StickCarousel/>
                    <ProductLink/>
            </div>
        )
    }
}
    const mapDispatchToProps = dispatch => {
        return{
            aboutCompany :  dispatch(getAboutCompanyActions()),
            exampleWork :  dispatch(getExampleWork())
        }
    }



export default connect(null,mapDispatchToProps)(App);
