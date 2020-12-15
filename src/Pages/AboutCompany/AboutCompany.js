import React from 'react';
import {connect} from 'react-redux';
import StickCarousel from '../../components/main/StickCarousel';
import ProductLink from '../../components/main/ProductLink';
import Information from '../../components/main/Information';
import {getAboutCompanyActions} from '../../redux/aboutCompany/AboutCompanyActions';
import {getAllExampleWork} from '../../redux/exampleWork/ExampleWorkActions';

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