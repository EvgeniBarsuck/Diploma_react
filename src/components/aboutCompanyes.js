import React from 'react';
import {AboutCompany} from './aboutCompany';
import {connect} from 'react-redux'

const AboutCompanyes = ({aboutCompany}) => {
    if(!aboutCompany){
        return <p>Описания пока нет</p>
    }
    return aboutCompany.map(aboutCompany => <AboutCompany aboutCompany = {aboutCompany}/>);
}

const mapStateToProps = state => {
    return {
        aboutCompany : state.aboutCompany.aboutCompany
    }
}


export default connect(mapStateToProps,null)(AboutCompanyes)