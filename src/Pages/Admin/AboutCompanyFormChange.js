import React from 'react';
import { TextField, Button, InputLabel } from '@material-ui/core';
import { connect } from 'react-redux';
import {patchAboutCompanyActions} from '../../redux/aboutCompany/aboutCompanyActions'

 class AboutCompanyFormChange extends React.Component {
    constructor (props){
        super(props);
        this.state = {name : this.props.description.Name};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        let name  = event.target.name;
        this.setState({[name]: event.target.value});
    }
    handleSubmit(event) {
        this.props.patchAboutCompany(this.state);
        event.preventDefault();
        window.location.reload();
    }
    render(){
        return(
            <div>
                <InputLabel >Изменить описание компании</InputLabel>
                <div>
                    <TextField defaultValue={this.props.description.Name} type="text" label="Название" name="name" onChange={this.handleChange}/>
                </div>
                <div>
                    <TextField
                        id="outlined-textarea"
                        label="Краткое описание"
                        placeholder="Placeholder"
                        name="ShortDescription"
                        multiline
                        onChange={this.handleChange}
                        variant="outlined"
                        defaultValue={this.props.description.ShortDescription}
                    />
                </div>

                <Button onClick={this.handleSubmit}>Отправить</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        patchAboutCompany : (data) => dispatch(patchAboutCompanyActions(data)),
        // exampleWork :  dispatch(getExampleWork())
    }
}


export default connect(null,mapDispatchToProps)(AboutCompanyFormChange);
