import React from 'react';
import {connect} from 'react-redux';
import SingleLineGridList from './SingleLineGridList';

class ExampleWorkInformation extends React.Component{
    constructor (props){
        super(props);
        this.props = props;
    }
    render() {
        if(this.props.oneExampleOfWork.loading){
            return <p>Загрузка</p>
        }
        return (
            <div>
                <p>{this.props.oneExampleOfWork.oneExampleOfWork[0].Name}</p>
                <div>
                    <SingleLineGridList items = {this.props.oneExampleOfWork.oneExampleOfWork[0].MassImg}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        oneExampleOfWork : state.oneExampleOfWork
    }
}

export default connect(mapStateToProps,null)(ExampleWorkInformation)