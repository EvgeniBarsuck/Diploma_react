import React from 'react';

export default class CarouselPhoto extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        const styles = {
            
        }
        return (
            <div >
                 <img src={this.props.img} key= {this.props.key} style={styles} width="400" height="300" alt="Not found"/>
            </div>
        )
    }
}