import React from 'react';
import styledComponents from 'styled-components';
import axios from 'axios';
import { styled } from '@material-ui/core/styles';
import { Typography, Box, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NewsList from './NewsList';
import Testimonials from './Testimonials';


const StyledH1 = styledComponents.h1`
    margin: 0px;
    padding-left: 20px;
    padding-top: 20px
`

const StyledDiv = styledComponents.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const StyledTypography = styled(Typography)({
    padding: '10px 10px 10px 40px',
    maxWidth: '50em',
    maxHeight: '350px'
})

const StyledPaper = styled(Paper)({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
})

const StyledButton = styled(Button)({
    marginLeft: '30px'
})

class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [],
        }
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/testimonials/');
        this.setState({
            testimonials: res.data,
        });
    }
    render(){
        return (
            <div>
                <StyledPaper>
                    <StyledH1>ООО «ВеДер и К»</StyledH1>
                    <div>
                        <StyledTypography style={{ color: "red" }}>
                            Проектирование, Геодези
                        </StyledTypography>
                        <StyledTypography >
                            Наша компания – быстро развивающийся проект на рынке проектно-изыскательских услуг в Республике Беларусь.
                        </StyledTypography>
                        <StyledTypography style={{ color: "red" }}>
                            Наша компания основана в 2013 году
                        </StyledTypography>
                        <StyledTypography >
                            С момента начала деятельности мы постоянно наращиваем объемы выполняемых работ.
                        </StyledTypography>
                        <Link to='/aboutcompany'>
                            <StyledButton color="primary" >Подробнее...</StyledButton>
                        </Link>
                    </div>
                    <NewsList />
                </StyledPaper>
                <Testimonials testimonials={this.state.testimonials || []}/>
            </div>
        )
    }
}

export default MainPage;
