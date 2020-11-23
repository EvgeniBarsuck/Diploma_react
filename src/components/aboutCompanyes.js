import React from 'react';
import {AboutCompany} from './aboutCompany';
import {connect} from 'react-redux'

const AboutCompanyes = ({AboutCompanyes}) => {
    if(!AboutCompanyes.length){
        return <p>Описания пока нет</p>
    }
    return AboutCompanyes.map(aboutCompany => <AboutCompany aboutCompany = {aboutCompany}/>);
}

const mapStateToProps = state => {
    
    return {
        aboutCompany : state.aboutCompany.aboutCompany
    }
}


export default connect(mapStateToProps)(AboutCompanyes)