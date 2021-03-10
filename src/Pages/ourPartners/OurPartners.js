import React from 'react';
import OurPartnersList from './OurPartnersList';

const ourPartners = [
    {
        title: 'ОРШАВОДАЛКАНАЛ',
        link: 'http://www.orshavodokanal.by',
        description: 'Филиал «Оршаводоканал» Витебского областного коммунального унитарного предприятия водопроводно-канализационного хозяйства  «Витебскоблводоканал», создан на основании приказа генерального директора УП Витебскоблводоканал» от 10.01.2018 года №3 и является обособленным подразделением Витебского областного коммунального унитарного предприятия водопроводно-канализационного хозяйства «Витебскоблводоканала».',
        img: 'http://www.aquaby.by/wp-content/uploads/2015/03/12-%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D1%83%D0%BD%D0%B8%D1%82%D0%B0%D1%80%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B5-%D0%92%D0%9A%D0%A5-%C2%AB%D0%9E%D1%80%D1%88%D0%B0%D0%B2%D0%BE%D0%B4%D0%BE%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%C2%BB-%D0%9E%D1%80%D1%88%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%80%D0%B0%D0%B9%D1%81%D0%BF%D0%BE%D0%BB%D0%BA%D0%BE%D0%BC%D0%B0-300x182.jpeg',
    },
    {
        title: 'ПУ "Оршагаз"',
        link: 'https://www.oblgas.by/ru/struktura-predpriyatiya/pu-orsagaz',
        description: '',
        img: 'https://www.oblgas.by/sites/default/files/styles/juicebox_large/public/2018-08/orsha3.JPG?itok=MpgOUDh9',
    },
    {
        title: 'Оршанские электрические сети',
        link: 'https://www.vitebsk.energo.by/ru/o-predpriyatii/filials/orshanskie-elektricheskie-seti/',
        description: 'В состав входят 5 районов электросетей. Подстанций 35–330 кВ — 43. Протяженность электрических сетей 0,4–330 кВ более 10,2 тыс. км. Количество персонала — 652 человека.',
        img: 'https://www.vitebsk.energo.by/media/filials/2019/07/04/oseti-md.jpg',
    },
    {
        title: 'Производственное республиканское унитарное предприятие "Геосервис"',
        link: 'http://www.geoservice.by/index.shtml',
        description: 'Инженерно-геодезические, инженерно-геологические, инженерно-геоэкологические, радиационные изыскания для строительства, бурение и обоснование зон санитарной охраны водозаборных скважин, проекты обоснования границ горного отвода для добычи подземных вод, устройство свайных фундаментов, геологоразведочные и маркшейдерские работы на месторождениях строительных материалов по всей Беларуси и в других странах.',
        img: 'https://www.oblgas.by/sites/default/files/styles/juicebox_large/public/2018-08/orsha3.JPG?itok=MpgOUDh9',
    }
];

const OurPartners = () => {
    return (
        <div>
            <h1>Наши партнеры</h1>
            <OurPartnersList ourPartners={ourPartners}/>
        </div>

    );
}

export default OurPartners;