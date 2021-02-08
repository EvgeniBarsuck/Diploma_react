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

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.props.AboutCompany();
        this.props.Contacts();
        this.props.getExampleWork();
        this.state = {
            contactText: "",
            listContact: [],
            exampleWork: [],
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
            exampleWork: this.props.exampleWork,
        })
    }

    render() {
        if (this.props.aboutCompany.loading || this.props.contacts.loading === undefined || this.props.contacts.loading || this.props.contacts.loading === undefined) {
            return (<p>Загрузка</p>);
        }
        console.log(this.state.exampleWork);
        const contacts =this.props.contacts.contacts;

        const exampleWorkCard = this.state.exampleWork.map(item => 
            <div key={item.id}><ChangeCard item={item} /></div>
        )

        console.log(exampleWorkCard)

        return (
            <div>
                <div>
                    <InputLabel id="demo-simple-select-label">Редактирование контактов</InputLabel>
                    <Table columns={["Имя" ,'Телефон','Емаил', "Должность", "Должность"]} rowse={contacts}/>
                    <CreateItem />
                </div>

                <AboutCompanyFormChange description={this.props.aboutCompany.aboutCompany} />
                {exampleWorkCard}
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
    const exampleWork = state.exampleWork.exampleWork;
    return {
        aboutCompany: state.aboutCompany,
        contacts: state.contacts,
        exampleWork: exampleWork,
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