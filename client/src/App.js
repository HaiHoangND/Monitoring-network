import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalView from "./pages/globalView/GlobalView";
import Host from "./pages/hosts/Host";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalView/>}/>
        <Route path="/host" element={<Host/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
