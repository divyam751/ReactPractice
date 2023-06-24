import "./App.css";
import PinInputCom from "./Components/PinInputCom";
import FormControlComp from "./Components/FormControlComp";
import CheckBoxComp from "./Components/CheckBoxComp";
import BadgeCom from "./Components/BadgeCom";
import CardCom from "./Components/CardCom";
import UseDisclouserComp from "./Components/UseDisclouserComp";
import UseTokenCom from "./Components/UseTokenCom";

function App() {
  return (
    <div className='App'>
      <PinInputCom />
      <FormControlComp />
      <CheckBoxComp />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <BadgeCom />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CardCom />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <UseDisclouserComp />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <UseTokenCom /> 
    </div>
  );
}

export default App;
