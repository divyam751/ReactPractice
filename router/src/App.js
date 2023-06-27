import "./App.css";
import AllLinks from "./Pages/AllLinks";
import AllRoutes from "./Pages/AllRoutes";
const baseUrl = process.env.REACT_APP_BASE_URL;
function App() {
  return (
    <div className='App'>
      <h1>BaseURL : {baseUrl}/</h1>
      <AllLinks />
      <AllRoutes />
    </div>
  );
}

export default App;
