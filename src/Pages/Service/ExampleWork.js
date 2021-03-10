import React from 'react';
import {connect} from 'react-redux';
import ServiceInformation from '../../components/main/ExampleWorkInformation'
import {getOneExampleWork} from '../../redux/exampleWork/ExampleWorkActions';


class ExampleWork extends React.Component{
    constructor (props){
        super(props);
        this.props.ExampleOfWork(this.props.match.params.id);
    };
    render() {
        
        if(this.props.ExampleOfWork.loading){
            return <p>Загрузка</p>
        }
        console.log(this.props.ExampleOfWork)
        return (
            <div>
                <ServiceInformation/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        ExampleOfWork : () => dispatch(getOneExampleWork(ownProps.match.params.id)),
        // exampleWork :  dispatch(getExampleWork())
    }
}


export default connect(null,mapDispatchToProps)(ExampleWork);