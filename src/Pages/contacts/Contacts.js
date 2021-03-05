import React from 'react';
import { Paper, Box } from '@material-ui/core'
import Card from '../../components/main/productCard';
import axios from 'axios';
import Contact from '../../components/main/Contact';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  
  const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
  ];

class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [],
        }
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/api/contacts/');
        this.setState({
            contacts: res.data,
        });
    }

    render() {
        console.log(this.state.contacts);
        if(this.state.contacts.length ===0){
            return (<div>Загрузка</div>)
        }
        return (
            <div>
                <h1>
                    Контакты
                </h1>
                {/* <Box>
                    {this.state.contacts.map(item => <Contact item={item} />)}
                </Box> */}
                <YMaps>          
                    <Map
                        defaultState={{
                        center: [55.75, 37.57],
                        zoom: 9,
                        controls: ['zoomControl', 'fullscreenControl'],
                        }}
                        modules={['control.ZoomControl', 'control.FullscreenControl']}
                    >
                        <Placemark defaultGeometry={[55.75, 37.57]} />
                    </Map>
                </YMaps>
            </div>
        )
    }
}

export default Contacts;