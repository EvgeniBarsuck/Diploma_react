import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import {connect} from 'react-redux';
import CarouselPhoto from "./CarouselPhoto"

class SimpleSlider extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
    }
    render() { 
        const array = this.props.aboutCompany[0].Img;
        const arrayElement =  array.map((img, index) => <CarouselPhoto img = {img} key={index}/>)
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0%',
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };  
        return (
        <Slider {...settings}>
            {arrayElement}
        </Slider>
  )}
}

const mapStateToProps = state => {
    console.log()
    return {
        aboutCompany : state.aboutCompany.aboutCompany
    }
}

export default connect(mapStateToProps,null)(SimpleSlider)