import React from 'react';
import styledComponent from 'styled-components';
import { Typography, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledDiv = styledComponent.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 10px;
`
const StyledH2 = styledComponent.h2`
    margin: 0px;
    padding-left: 10px;
`

const StyledTypography = styled(Typography)({
    padding: '10px 10px 10px 10px',
    maxWidth: '50em',
})

const OurPartnersList = ({ ourPartners }) => {
    return (
        <div>
            {
                ourPartners.map(item => (
                    <StyledDiv>
                        <div>
                            <img width="300px" src={item.img}/>
                        </div>
                        <div>
                            <div><StyledH2>{item.title}</StyledH2></div>
                            <div><StyledTypography><a href={item.link}>Интернет-портал {item.link}</a></StyledTypography></div>
                            <div><StyledTypography style={{ wordWrap: 'break-word' }}>{item.description || ''}</StyledTypography></div>
                        </div>
                    </StyledDiv>
                ))
            }
        </div>
    )
}

export default OurPartnersList;