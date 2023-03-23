import React from 'react';
import {Container, Header, HeaderTitle, Total} from './styles';

const ResumeItem = ({title, Icon}) => {
    return (
        <Container>
            <Header>
                <HeaderTitle>{title}</HeaderTitle>
                <Icon />
            </Header>
            <Total>1000</Total>
        </Container>
    );
};

export default ResumeItem;