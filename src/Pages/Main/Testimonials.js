import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import styledComponents from 'styled-components';


const StyledH1 = styledComponents.h1`
    margin: 0px;
    padding-left: 220px;
    padding-top: 20px
`

const StyledTypography = styled(Typography)({
    padding: '10px 10px 10px 40px',
    maxWidth: '50em',
    maxHeight: '350px',
    paddingLeft: '250px',

})

const Testimonials = ({ testimonials }) => {
    return (
        <div style={{backgroundColor: "white"}}>
            <StyledH1>Отзывы</StyledH1>
            {
                testimonials.map(item => (
                    <div>
                        <StyledTypography style={{ color: "blue" }}>{item.name}</StyledTypography>
                        <StyledTypography >{item.testimonials}</StyledTypography>
                    </div>
                ))
            }
        </div>
    );
}

export default Testimonials;