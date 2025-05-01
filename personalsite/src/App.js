import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About'

function App() {
    return (
    <Router>
        <div className="App">
          <NavBar />
            <Routes>
                <Route path="/" element={<About />} />         
                <Route path="/about" element={<About />} />     
            </Routes>
        </div>
    </Router>
  );
}

export default App;
