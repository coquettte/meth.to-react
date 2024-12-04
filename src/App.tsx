import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModernHeader } from './components/Header';
import { ModernFooter } from './components/Footer';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ModernHeader />
        <main className="flex-1 container mx-auto p-4">
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Routes>
        </main>
        <ModernFooter />
      </div>
    </Router>
  );
}

export default App;

