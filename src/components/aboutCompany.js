import React from 'react';

export class AboutCompany extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log(props.aboutCompany);
    }
    
    render(){
        return (
            <li key = {this.props.aboutCompany._id.toString()}>{this.props.aboutCompany.Name}</li> 
        )
    }

} 