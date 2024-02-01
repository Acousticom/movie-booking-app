import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import BookingPage from './pages/BookingPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movieDetails/:id' element={<MovieDetails/>}/>
        <Route path='/booking-page' element={<BookingPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
