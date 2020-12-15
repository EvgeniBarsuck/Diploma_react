import React from 'react';
import {connect} from 'react-redux';
import {getAboutCompanyActions as AboutCompanyActions} from '../../redux/aboutCompany/AboutCompanyActions';
import AboutCompanyFormChange from '../../components/main/AboutCompanyFormChange';


class Admin extends React.Component{
    constructor (props){
        super(props);
        this.props.AboutCompany();
        
    }
    render(){
        if(this.props.aboutCompany.loading  || this.props.aboutCompany.loading === undefined){
            return (<p>Загрузка</p>);
        }
        return (
            <div>
                <AboutCompanyFormChange description={this.props.aboutCompany.aboutCompany}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        aboutCompany : state.aboutCompany
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        AboutCompany : () => dispatch(AboutCompanyActions()),
        // exampleWork :  dispatch(getExampleWork())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Admin);