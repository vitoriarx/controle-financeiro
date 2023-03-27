import React, {useState} from 'react';
import {Container, InputContent, Label, Input, RadioGroup, Button} from "./styles"


const Form = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave =() => {
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        } else if(amount < 1){
            alert("O valor tem que ser positivo!");
            return;
        }
    }
    return(
        <>
            <Container>
                <InputContent>
                    <Label>Descrição </Label>
                    <Input value={desc} onChange={(e) => setDesc(e.target.valeu)}/>
                </InputContent>

                <InputContent>
                    <Label>Valor</Label>
                    <Input value={amount}
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)}/>
                </InputContent>

                <RadioGroup>
                    <Input type="radio" 
                    id='rIncome' 
                    defaultChecked name='group1' 
                    onChange={() => setExpense(!isExpense)}/>
                    <Label htmlFor='rIncome'>Entrada</Label>


                    <Input type='radio' id='rExpenses' name='group1' onChange={() => setExpense(!isExpense)} />
                    <Label htmlFor='rExpenses'>Saída</Label>
                </RadioGroup>
            </Container>

            <RadioGroup />
            <Button onClick={handleSave}>ADICIONAR</Button>
        </>
    )
};

export default Form;