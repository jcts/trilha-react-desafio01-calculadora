<<<<<<< HEAD
import Input from "./components/input";
import Button from "./components/button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "x":
          handleMultNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  };
=======

import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          default: 
            break;
        }
    }

  }
>>>>>>> 6b03ab884c388ab39b999d39e09835c673bdeecf

  return (
    <Container>
      <Content>
<<<<<<< HEAD
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultNumbers} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
=======
        <Input value={currentNumber}/>
        <Row>
          <Button label="x"/>
          <Button label="/"/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
>>>>>>> 6b03ab884c388ab39b999d39e09835c673bdeecf
        </Row>
      </Content>
    </Container>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 6b03ab884c388ab39b999d39e09835c673bdeecf

export default App;
