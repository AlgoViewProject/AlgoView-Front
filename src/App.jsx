import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/home';
import InterestAnalysis from './pages/interest_analysis/InterestAnalysis';
import BiasAnalysis from './pages/bias_analysis/BiasAnalysis';
import Recommendation from './pages/recommendation/Recommendation';
import Review from './pages/review/Review';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interest-analysis" element={< InterestAnalysis/>} />
        <Route path="/bias-analysis" element={< BiasAnalysis/>} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/review" element={<Review />} />

      </Routes>
    </>
  )
}

export default App
