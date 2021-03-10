import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledTypography = styled(Typography)({
    padding: '10px 10px 10px 40px',
    maxWidth: '50em',
    maxHeight: '350px'
})

const News = ({ news }) => {
    return (
        <div>
            {news.map(item =>(
                <div>
                    <StyledTypography style={{ color: "red" }}>{item.title}</StyledTypography>
                    <StyledTypography >{item.description}</StyledTypography>
                </div>
            ))}
        </div>
    )
}

export default News;