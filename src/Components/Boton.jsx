import { useAppContext } from "./CalculatorState"

export default function Boton  ({type, value}) {

    const calculator = useAppContext();
    
    function handleClick(){
        switch(type){
            case "number":
                calculator.addNumero(parseInt(value));
              break;
            case "operator":
                calculator.addOperacion(value);
              break;
            case "action":
                calculator.ejecutarOperacion(value);
              break;
            default:
        }
    }

  return (
    <button className="calculatorButton" onClick={handleClick}>{value}</button>
  )
}
