import CalculatorState from "./CalculatorState"
import CalculatorScreen from "./CalculatorScreen"
import Boton from "./Boton"

export default function Calculator () {
  return (
    
    <CalculatorState>
    
      <div className="calculatorContainer">
        <CalculatorScreen />
        <div className="container">
          <Boton type="action" value="AC" />
          <Boton type="operator" value="%" />
          <Boton type="action" value="<-" />
          <Boton type="operator" value="/" />
          <Boton type="number" value="7" />
          <Boton type="number" value="8" />
          <Boton type="number" value="9" />
          <Boton type="operator" value="*" />
          <Boton type="number" value="6" />
          <Boton type="number" value="5" />
          <Boton type="number" value="4" />
          <Boton type="operator" value="-" />
          <Boton type="number" value="3" />
          <Boton type="number" value="2" />
          <Boton type="number" value="1" />
          <Boton type="operator" value="+" />
          <Boton type="action" value="+/-" />
          <Boton type="number" value="0" />
          <Boton type="action" value="." />
          <Boton type="action" value="=" />

        </div>
      </div>
    </CalculatorState>
  
  )
}
