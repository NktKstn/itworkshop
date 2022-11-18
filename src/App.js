import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Main from "./Components/Main Page/Main";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Main/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
