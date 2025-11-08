import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './layouts/Home';


function App() {
  return (
    <>
      <nav style={{ padding: "10px"}}>
        <div className="icon">
          <h2>BOT&nbsp;<span>Master</span></h2>
        </div>
        <div className="menu1">
          <Link to="/" className="Link" style={{ marginRight: "10px" }}>Home</Link>
        </div>
        <div className="menu2">
            <p>Login</p>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
