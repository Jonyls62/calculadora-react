import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    /* estados */
    memoria: null,
    operacion:null,
    valorActual:0,
    isDecimal:false,
    /* metodos */
    addNumero:(value) => {},
    addOperacion:(operacion) => {},
    resultado : ()=>{},
    ejecutarOperacion: (action) =>{ },
});

export default function CalculatorState ({children}){
    
    const [memoria, setMemoria] = useState(null);
    const [operacion, setOperacion] = useState(null);
    const [valorActual, setValorActual] = useState(0);
    const [isReset, setIsReset] = useState(true);
    const [isDecimal, setIsDecimal] = useState(false);

    function handleAddNumero (value){
        if(isReset){
            if(value == '.'){setIsDecimal(true);
            }else{
                const point = isDecimal ? '.':'';
                const newValue = valorActual.toString()+ point + value.toString();
                setValorActual(parseFloat(newValue));
                setIsReset(false);
                setIsDecimal(false);
            }
        }else{
            if(value =='.'){
                setIsDecimal(true);
            }else{
                const point = isDecimal ? '.':'';  
                const newValue = valorActual.toString()+ point + value.toString();
                setIsDecimal(false);
                setValorActual(parseFloat(newValue));
            }
        }
    }
    function handleAddOperacion(operar){
        if(valorActual){
            if(operacion){
                handleResultado();
                setOperacion(op);
            }else{
                setOperacion(operar);
                setMemoria(valorActual);
                setValorActual(0);
                setIsReset(true);
            }
        }
    }

    function handleResultado(){
        let result = 0;
        if(valorActual && operacion && memoria){
            switch(operacion){
                case "+":
                    result = parseFloat(valorActual) + parseFloat(memoria);
                    break;
                case "-":
                    result = parseFloat(memoria) - parseFloat(valorActual);
                    break;
                case "*":
                    result = parseFloat(valorActual) * parseFloat(memoria);
                    break;
                case "/":
                    result = parseFloat(memoria) / parseFloat(valorActual);
                    break;
                case "%":
                    result = parseFloat(memoria) /100 * parseFloat(valorActual);
                    break;
                default:
            }
            setValorActual(result);
            setOperacion(null);
            setMemoria(result);
            setIsReset(true);
            setIsDecimal(false)
        }
    }
    function clean(){
        setValorActual(0);
        setOperacion(null);
        setMemoria(0);
        setIsReset(true);
        setIsDecimal(false);
    }
    function deleteNumber(){
        const index = valorActual.toString().indexOf('.')
        if(index > 0){
            const numberOfDecimals = valorActual.toString().slice(index + 1 ).length;
            if(numberOfDecimals == 1 ){
                const min = Math.floor(valorActual)
                setValorActual(min)
            }else{
                const newNumber = parseFloat(valorActual).toFixed(numberOfDecimals - 1);
                setValorActual(newNumber)
            }
        }else{
            setValorActual(parseInt(valorActual/10));
        }
    }
    function changeSing(){
        setValorActual(valorActual * -1);
    }
    
    function handleEjecutarOperacion(action){
        switch(action){
            case "=": 
                 handleResultado();
               break;
            case "AC":
                clean();
               break;
            case "<-":
                deleteNumber();
                break;
            case "+/-":
                changeSing();
                break;
            case ".":
                convertTofloat();
                break;
                       
            default:
        }
    }

    return (
    <AppContext.Provider 
     value={{
        memoria,
        operacion,
        valorActual,
        isDecimal,
        addNumero : handleAddNumero,
        addOperacion : handleAddOperacion,
        resultado : handleResultado,
        ejecutarOperacion: handleEjecutarOperacion
    }}>
        {children}
    </AppContext.Provider>
    );
}

export function useAppContext(){
    return (useContext(AppContext))
}
