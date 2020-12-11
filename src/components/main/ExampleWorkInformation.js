import React from 'react';
import {connect} from 'react-redux';
import SingleLineGridList from './SingleLineGridList';

class ExampleWorkInformation extends React.Component{
    constructor (props){
        super(props);
        this.props = props;
    }
    render() {
        if(this.props.exampleWork.exampleWork.loading){
            return <p>Загрузка</p>
        }
        return (
            <div>
                <p>{this.props.exampleWork.exampleWork.oneExampleOfWork.Name}</p>
                <div>
                    <SingleLineGridList items = {this.props.exampleWork.exampleWork.oneExampleOfWork.MassImg}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        exampleWork : state
    }
}

export default connect(mapStateToProps,null)(ExampleWorkInformation)