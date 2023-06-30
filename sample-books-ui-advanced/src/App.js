import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Books from "./pages/Books";
import Book from "./pages/Book";
import New from "./pages/New";
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/new" element={<New />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
