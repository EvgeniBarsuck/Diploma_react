import React from 'react';
import AboutCompanyes from './aboutCompanyes'
import {connect} from 'react-redux'
import {getAboutCompanyActions} from '../redux/aboutCompanyActions'

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            col : 0,
            title : "",
            aboutCompany : []
        }
    }

    async componentDidMount(){
        this.props.getAboutCompanyActions();
    }

    submitHandler = event =>{
        event.preventDefault();
        this.setState({title : ""});
        
    }

    onChange = event =>{
        event.persist();
        this.setState(prev =>({...prev, ...{
            [event.target.name] : event.target.value
        }})) 
    }

    render() {
      return (
        <div>
            <div>
                <input type="text" value={this.state.title} onChange={e => this.onChange(e)} name="title" id="title"/>
                <button type="submit" onClick = {this.submitHandler}>Кнопка </button>
                <textarea name='about' value={this.state.aboutCompany} onChange = {e => this.onChange(e)}></textarea>
            </div>
            <AboutCompanyes/>
        </div>  
      );
    }
  }
  const mapDispatchToProps = {
        aboutCompany : getAboutCompanyActions
  }

export default connect(null, mapDispatchToProps)(Clock);
