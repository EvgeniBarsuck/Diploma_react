import React from 'react';
import { connect } from 'react-redux';
import AboutCompanyFormChange from './AboutCompanyFormChange';
import { getAboutCompanyActions as AboutCompanyActions } from '../../redux/aboutCompany/aboutCompanyActions';
import { getContactsActions } from '../../redux/Contacts/ContactsActions';
import { getAllExampleWork } from '../../redux/exampleWork/ExampleWorkActions'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '../../components/main/Table';
import CreateItem from '../../components/main/CreateItem';
import ChangeCard from '../../components/main/ChangeCard';
import { Button } from '@material-ui/core';

class Admin extends React.Component {
    exampleOfWork;
    constructor(props) {
        super(props);
        this.props.AboutCompany();
        this.props.Contacts();
        this.props.getExampleWork();
        this.state = {
            contactText: "",
            listContact: [],
            exampleWork: [],
            toggle: false,
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount() {
        this.setState({
            listContact: this.props.contacts.contacts,
            exampleWork: this.props.exampleWork.exampleWork,
        })
        this.exampleOfWork = this.props.exampleWork.exampleWork;
    }

    componentDidUpdate() {
        if(!this.props.exampleWork.exampleWork) {
            this.exampleOfWork = this.props.exampleWork.exampleWork;
            
        }
    }

    renderExample() {
        return (
            <div>
                {this.exampleOfWork?.map(item => 
                    <div key={item._id}><ChangeCard item={item} /></div>
                )}
            </div>
        )
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
        this.forceUpdate();
    }
    
    render = () => {
        if (
            this.props.aboutCompany.loading || this.props.contacts.loading === undefined||
            this.props.contacts.loading || this.props.contacts.loading === undefined ||
            this.props.exampleWork.loading || this.props.exampleWork.loading === undefined ||
            this.props.exampleWork.exampleWork?.length === 0
        ) {
            return (<p>Загрузка</p>);
        }

        const contacts =this.props.contacts.contacts;

        //console.log(this.props.exampleWork.loading);

        return (
            <div>
                <div>
                    <InputLabel id="demo-simple-select-label">Редактирование контактов</InputLabel>
                    <Table columns={["Имя" ,'Телефон','Емаил', "Должность", "Должность"]} rowse={contacts}/>
                    <CreateItem />
                </div>

                <AboutCompanyFormChange description={this.props.aboutCompany.aboutCompany} />
                <Button onClick={() => this.toggle()}>Eще</Button>
                {this.state.toggle && this.renderExample()}
                <Select />
            </div>
        )
    }
}
// description: "Просто любит жить"
// email: "jonni@mail.ru"
// img: "https://cameralabs.org/media/k2/items/cache/0d2fa12d05b8dafcd93ff2738b6a31f3_L.jpg"
// name: "Джонни"
// phone: "+37523145212"
// position: "Солдат"

const mapStateToProps = state => {
    return {
        aboutCompany: state.aboutCompany,
        contacts: state.contacts,
        exampleWork: state.exampleWork,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AboutCompany: () => dispatch(AboutCompanyActions()),
        Contacts: () => dispatch(getContactsActions()),
        getExampleWork: () => dispatch(getAllExampleWork()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin);