import { useAppContext } from "./CalculatorState"

export default function CalculatorScreen (){

    const calculator = useAppContext();

  return (
    <div className="calculatorScreen">
        <div>
            Memoria: {calculator.memoria}
            Operacion:{calculator.operacion}
        </div>
        <div className="calculatorValor">{calculator.valorActual}{calculator.isDecimal? '.':''}</div>
    </div>
  )
}

