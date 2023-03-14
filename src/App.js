import React from 'react';
import Adicao from './componets/Adicao';
import Divisao from './componets/Divisao';
import Multiplicacao from './componets/Multiplicacao';
import PrecisoEstudar from './componets/PrecisoEstudar';
import Subtracao from './componets/Subtracao';


function App() {
  return (
    <div> 
      <Adicao num1={5} num2={5} />
      <Divisao num1={10} num2={5}/>
      <Multiplicacao num1={10} num2={5} />
      <Subtracao num1={10} num2={5} />
      <PrecisoEstudar materia = "Front-end 3 com kelson" />
    </div>
  );
}

export default App;
