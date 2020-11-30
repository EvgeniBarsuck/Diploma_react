import React from 'react';
import {connect} from 'react-redux';

class ServiceInformation extends React.Component{
    constructor (props){
        super(props);
        this.props = props;
        // this.massPath = this.props.match.url.replace(/\//g, " ").trim().split(" ");
        console.log( this.props)
    }
    render() {
        if(this.props.oneExampleOfWork.loading){
            return <p>Загрузка</p>
        }
        return (
            <div>
                <p>{this.props.oneExampleOfWork.oneExampleOfWork[0].Name}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        oneExampleOfWork : state.oneExampleOfWork
    }
}

export default connect(mapStateToProps,null)(ServiceInformation)