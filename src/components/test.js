import React from 'react';
import {connect} from 'react-redux';
import {getAboutCompanyActions} from '../redux/aboutCompanyActions'

class AboutCompany extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            col : 0,
            title : "",
            aboutCompany : []
        }
    }

    componentDidMount(){
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
        </div>  
      );
    }
  }
  const mapDispatchToProps = dispatch => {
    return{
        aboutCompany :  dispatch(getAboutCompanyActions())
    }
  }

export default connect(null, mapDispatchToProps)(AboutCompany);
