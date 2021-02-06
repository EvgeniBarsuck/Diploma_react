import React from 'react';
import { connect } from 'react-redux';
import AboutCompanyFormChange from '../../components/main/AboutCompanyFormChange';
import { getAboutCompanyActions as AboutCompanyActions } from '../../redux/aboutCompany/aboutCompanyActions';
import { getContactsActions } from '../../redux/Contacts/ContactsActions';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '../../components/main/Table';
import CreateItem from '../../components/main/CreateItem';




class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.props.AboutCompany();
        this.props.Contacts();
        this.state = {
            contactText: "",
            listContact: [],
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
        })
    }

    render() {
        if (this.props.aboutCompany.loading || this.props.contacts.loading === undefined || this.props.contacts.loading || this.props.contacts.loading === undefined) {
            return (<p>Загрузка</p>);
        }
        console.log(this.props.contacts);
        const contacts =this.props.contacts.contacts;

        return (
            <div>
                <InputLabel id="demo-simple-select-label">Выберите контакта</InputLabel>
                <Table columns={["Имя" ,'Телефон','Емаил', "Должность", "Должность"]} rowse={contacts}/>
                <CreateItem />
                <TextField id="standard-basic" name="contactText" label="Standard" onChange={(e) => this.onChange(e)} value={this.state.contactText} />
                <AboutCompanyFormChange description={this.props.aboutCompany.aboutCompany} />
                <p>{this.props.contacts.contacts[0].name}</p>
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
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AboutCompany: () => dispatch(AboutCompanyActions()),
        Contacts: () => dispatch(getContactsActions())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin);