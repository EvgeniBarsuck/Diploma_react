import React from 'react';
import {connect} from 'react-redux'

export class GetAboutCompany extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        
        // eslint-disable-next-line no-cond-assign
        if(this.props.aboutCompany.loading){
            return (
                <span>Загрузка</span> 
            )
        }
        if(this.props.type === "Head"){
            return (
                <h2>{this.props.aboutCompany.aboutCompany.Name}</h2>
            )
        }
        if(this.props.type === "ShortDescription"){
            return (
                <span>{this.props.aboutCompany.aboutCompany.ShortDescription}</span>
            )
        }
        if(this.props.type === "LongDescription"){
            return (
                <pre>
                    <span >{this.props.aboutCompany.aboutCompany.LongDescription}</span>
                </pre>

            )
        }
    
    }

} 
const mapStateToProps = state => {
    return {
        aboutCompany : state.aboutCompany
    }
}

export default connect(mapStateToProps,null)(GetAboutCompany)