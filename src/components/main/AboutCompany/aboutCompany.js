import React from 'react';
import {connect} from 'react-redux'

export class AboutCompany extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        
        // eslint-disable-next-line no-cond-assign
        if(this.props.aboutCompany.loading){
            return (
                <div>
                    <span>Загрузка</span>
                </div>
            )
        }
        if(this.props.type === "Head"){
            return (
                <div><p>{this.props.aboutCompany.aboutCompany[0].Name}</p></div>
            )
        }
        if(this.props.type === "ShortDescription"){
            return (
                <div><p>{this.props.aboutCompany.aboutCompany[0].ShortDescription}</p></div>
            )
        }
        if(this.props.type === "LongDescription"){
            return (
                <div><p >{this.props.aboutCompany.aboutCompany[0].LongDescription}</p></div>
            )
        }
        if(this.props.type === "Img"){
            return (
                <div>
                    <img src={this.props.aboutCompany.aboutCompany[0].Img[0]} alt="альтернативный текст"></img>
                </div>
            )
        } 
    }

} 
const mapStateToProps = state => {
    return {
        aboutCompany : state.aboutCompany
    }
}

export default connect(mapStateToProps,null)(AboutCompany)