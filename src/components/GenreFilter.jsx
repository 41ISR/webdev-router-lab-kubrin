import { useSearchParams } from "react-router-dom";
import { movies, genres } from "../data/movies";


export default function GenreFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeGenre = searchParams.get("genres") || ""

  const onSelect = (id) => {
    setSearchParams(id ? {genres: id} : {})
  }
  return (
    <div className="filter-row">
      {genres.map((cat) => (
        <button
          key={cat.id || 'all'}
          type="button"
          className={'genre-btn ' + (cat.id === activeGenre ? ' active' : '')}
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
