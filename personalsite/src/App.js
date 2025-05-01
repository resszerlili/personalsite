import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
    return (
    <Router>
        <div className="App">
          <NavBar />
            <Routes>
                <Route path="/" element={<About />} />         
                <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="projects" element={<Projects  />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
