import React from 'react';
import Information from './Information';
import {getAboutCompanyActions} from '../../../redux/aboutCompany/aboutCompanyActions'
import {getAllExampleWork} from '../../../redux/exampleWork/GetAll/ExampleWorkActions'
import {connect} from 'react-redux';
import StickCarousel from './StickCarousel';
import ProductLink from './ProductLink';

class AboutCompany extends React.Component{
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
            exampleWork :  dispatch(getAllExampleWork())
        }
    }



export default connect(null,mapDispatchToProps)(AboutCompany);
