import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/home';
import InterestAnalysis from './pages/interest_analysis/InterestAnalysis';
import InterestAnalysisLoading from './pages/interest_analysis/InterestAnalysisLoading';
import InterestAnalysisResult from './pages/interest_analysis/InterestAnalysisResult';
import BiasAnalysis from './pages/bias_analysis/BiasAnalysis';
import Recommendation from './pages/recommendation/Recommendation';
import Review from './pages/review/Review';
import Test from './pages/test/Test';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interest-analysis" element={< InterestAnalysis/>} />
        <Route path="/interest-analysis/loading" element={< InterestAnalysisLoading/>} />
        <Route path="/interest-analysis/result" element={< InterestAnalysisResult/>} />
        <Route path="/bias-analysis" element={< BiasAnalysis/>} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/review" element={<Review />} />
        <Route path="/test" element={<Test />} />

      </Routes>
    </>
  )
}

export default App
