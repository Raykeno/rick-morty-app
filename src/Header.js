import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
  return (
        <nav class="navbar navbar-dark">
            <a class="navbar-brand" href="/">
                <img src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" width="200" height="60" alt=""/>
            </a>
            <div class="container">
                <Link to="favorites" class="btn btn-outline-dark btn-lg m-2">Favoris</Link>
                <Link to="episodes" class="btn btn-outline-dark btn-lg m-2">Episodes</Link>
            </div>
        </nav>
  )
}


