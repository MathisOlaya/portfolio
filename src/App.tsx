import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Desktop from './views/Desktop';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Desktop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
