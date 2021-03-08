import React from 'react';
import { Paper, Box } from '@material-ui/core'
import Card from '../../components/main/productCard';
import axios from 'axios';
import Contact from '../../components/main/Contact';
import { YMaps, Map, Placemark, Circle } from "react-yandex-maps";
import Test from './contactsList';
import styled from 'styled-components';

const CompanyContactsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];


const companyContacts = [
    '211026, Оршанский район, г.п. Ореховск',
    'Ул. Железнодорожная д. 38.',
    'Тел/факс: (216) 65-54-01',
    'Тел/руководитель: +375 (29) 818-77-38',
    'УНП 391701847',
    'Andrey51184@mail.ru'
]

const bankDetails = [
    'Привер 1: 232313213123',
    'Привер 2: 232313213123',
    'Привер 3: 232313213123',
    'Привер 4: 232313213123',
    'Привер 5: 232313213123',
    'Привер 6: 232313213123',
]

const peopleContacts = [
    'Директор: +375 (29) 818-77-38',
    'Зам. Директора: +375 (29) 818-77-38',
    'Отдел кадров: +375 (29) 818-77-38',
]

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/contacts/');
        this.setState({
            contacts: res.data,
        });
    }

    render() {
        console.log(this.state.contacts);
        if (this.state.contacts.length === 0) {
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
                <CompanyContactsContainer>
                    <YMaps >
                        <Map width='calc(100% - 400px)' height='500px'
                            defaultState={{
                                center: [54.6838383, 30.49422229999999],
                                zoom: 9,
                                controls: ['zoomControl', 'fullscreenControl'],
                            }}
                            modules={['control.ZoomControl', 'control.FullscreenControl']}
                        >
                            <Placemark defaultGeometry={[54.6838383, 30.49422229999999]} />
                            <Circle defaultGeometry={[[54.6838383, 30.49422229999999], 30000]} />
                        </Map>
                    </YMaps>
                    <Test contacts={companyContacts} title='ООО "ВеДер и К"' titleType="h5"/>
                </CompanyContactsContainer>
                <CompanyContactsContainer>
                    <Test contacts={bankDetails} title="Рекзвизиты" titleType="h6"/>
                    <Test contacts={peopleContacts} title="Специалисты" titleType="h6"/>
                </CompanyContactsContainer>
            </div>
        )
    }
}

export default Contacts;