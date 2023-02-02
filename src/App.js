import css from './App.module.scss';
import {useCallback, useState} from "react";

function App() {
    const [ km, setKm ] = useState(0);
    const [ litresPer100km, setLitresPer100km ] = useState(0);
    const [ celsius, setCelsius ] = useState(0);
    const milesInOneKilometers = 1.609;

    const handleMilesToKilometers = useCallback((event) => {
      const result = event.target.value * milesInOneKilometers;
      return isFinite(result) ? setKm(result.toFixed(3)) : setKm(0)
    });

    const handleMilesGalonToKmPerLitres = useCallback((event) => {
        const firstPart = 100* 3.785;
        const secondPart = event.target.value * milesInOneKilometers;
        const result =  firstPart/secondPart;
        return isFinite(result) ? setLitresPer100km(result.toFixed(3)) : setLitresPer100km(0);
    }, [litresPer100km]);

    const handleFarenheitsToCelsius = useCallback((event) => {
        const firstPart = event.target.value - 32;
        const secondPart = 5/9;
        const result = firstPart * secondPart;
        return isFinite(result) ? setCelsius(result.toFixed(3)) : setCelsius(0);
    }, [celsius]);

  return (
   <div className={css.inputWrapper}>
       <p>Мили в км</p>
     <input
         onChange={handleMilesToKilometers}
         inputMode='numeric'
     />
       <span>{km}</span>
       <p>Галоны в литры на 100 км</p>
     <input
         onChange={handleMilesGalonToKmPerLitres}
         inputMode='numeric'
     />
       <span>{litresPer100km}</span>
       <p>Фаренгейты в цельсии</p>
     <input
        onChange={handleFarenheitsToCelsius}
        inputMode='numeric'
     />
       <span>{celsius}</span>

   </div>
  );
}

export default App;
