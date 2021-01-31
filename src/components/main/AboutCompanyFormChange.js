import React from 'react';
import { TextareaAutosize } from '@material-ui/core';
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
    }
    render(){
        return(
            <div>
                <label>
                    Имя: 
                    <input defaultValue={this.props.description.Name} type="text" name="name" onChange={this.handleChange}/>
                </label><br></br>
                <label>
                    Краткое описание: 
                    <TextareaAutosize wiegth="400px" defaultValue={this.props.description.ShortDescription} name="ShortDescription" onChange={this.handleChange}/>
                </label>

                <button onClick={this.handleSubmit}>Отправить</button>
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
