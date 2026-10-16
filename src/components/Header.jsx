import { useState } from 'react';
import {Link, NavLink, useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/search?q=" + encodeURIComponent(e.target.query.value.trim()))
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <NavLink className="nav">
          <Link to="/" className="nav-item">Главная</Link>
          <Link to="/movies" className="nav-item">Фильмы</Link>
          <Link to="/Linkbout" className="nav-item">О проекте</Link>
        </NavLink>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
        
            <input type="text" name="query" 
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
