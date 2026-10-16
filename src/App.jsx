import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout} from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='movies/:id' element={<MoviePage />} />
          <Route path='*' element={<NotFoundPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
