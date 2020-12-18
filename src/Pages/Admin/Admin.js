import React from 'react';
import {connect} from 'react-redux';
import AboutCompanyFormChange from '../../components/main/AboutCompanyFormChange';
import {getAboutCompanyActions as AboutCompanyActions} from '../../redux/aboutCompany/AboutCompanyActions';
import {getContactsActions} from '../../redux/Contacts/ContactsActions'



class Admin extends React.Component{
    constructor (props){
        super(props);
        this.props.AboutCompany();
        this.props.Contacts();
        
    }
    render(){
        if(this.props.aboutCompany.loading || this.props.contacts.loading === undefined || this.props.contacts.loading || this.props.contacts.loading === undefined){
            return (<p>Загрузка</p>);
        }
        console.log(this.props.contacts.contacts[0].name);
        return (
            <div>
                <AboutCompanyFormChange description={this.props.aboutCompany.aboutCompany}/>
                <p>{this.props.contacts.contacts[0].name}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        aboutCompany : state.aboutCompany,
        contacts : state.contacts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        AboutCompany : () => dispatch(AboutCompanyActions()),
        Contacts : ()=>  dispatch(getContactsActions())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Admin);