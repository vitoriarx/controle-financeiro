import React from 'react';
import {Container} from './styles';
import ResumeItem from '../ResumeItem'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign,} from "react-icons/fa"

const Resume = () => {
    return (
        <Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" /> 
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
            <ResumeItem title="Total" Icon={FaDollarSign} value="1000"/>
        </Container>
    )
};

export default Resume;
