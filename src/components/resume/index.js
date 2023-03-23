import React from 'react';
import {Container} from './styles';
import ResumeItem from '../ResumeItem'
import {FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign,} from "react-icons/fa"

const Resume = () => {
    return (
        <Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp}/> 
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown}/>
            <ResumeItem title="Total" Icon={FaDollarSign}/>
        </Container>
    )
};

export default Resume;
