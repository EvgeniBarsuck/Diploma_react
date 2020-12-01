import React from 'react';
import {connect} from 'react-redux';
import ServiceInformation from './ExampleWorkInformation'
import {getOneExampleWork} from '../../../../redux/exampleWork/GetOne/OneExampleWorkActions';


class ExampleWork extends React.Component{
    constructor (props){
        super(props);
        this.props = props;
        this.props.oneExampleOfWork(this.props.match.params.id);

    };
    render() {
        
        if(this.props.oneExampleOfWork.loading){
            return <p>Загрузка</p>
        }

        return (
            <div>
                    <ServiceInformation/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        oneExampleOfWork : () => dispatch(getOneExampleWork(ownProps.match.params.id)),
        // exampleWork :  dispatch(getExampleWork())
    }
}


export default connect(null,mapDispatchToProps)(ExampleWork);