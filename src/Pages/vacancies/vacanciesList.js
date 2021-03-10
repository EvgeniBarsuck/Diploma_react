import React from 'react';
import List from '../../components/main/List';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

const StyledTypography = styled(Typography)({
    padding: '20px 10px 10px 10px',
})


const VacanciesList = ({ vacancies }) => {
    return (
        <div>
            {vacancies.map((item) => (
                <div>
                    <h1>{item.title}</h1>
                    <StyledTypography>{item.salary}</StyledTypography>
                    <StyledTypography>{item.companyName}</StyledTypography>
                    <Link to="/feedback">
                        <Button variant="contained" color="primary">Откликнуться</Button>
                    </Link>
                    <StyledTypography>{item.shortDescription}</StyledTypography>
                    <List items={item.duties} title="Обязанности" titleType="h6"/>
                    <List items={item.requirements} title="Требования" titleType="h6"/>
                    <List items={item.conditions} title="Условия" titleType="h6"/>
                    <List items={item.keySkills} title="Ключевые навыки" titleType="h5"/>
                    <StyledTypography>{item.address}</StyledTypography>
                    <StyledTypography>{item.dayOfAdmission}</StyledTypography>
                </div>
            ))}
        </div>
        

    );
}

export default VacanciesList;