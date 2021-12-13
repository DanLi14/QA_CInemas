import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="http://www.staggeringbeauty.com/" target="_blank"><img id="logo" src="https://c.tenor.com/sTFc7j1xRJ0AAAAM/doge-dancing-doge.gif" alt="todo clapping gif" width="100" height="100"></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav nav-fill w-100 justify-content-center">
                        <li class="nav-item">
                            <Link className="text-light" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="text-light" to="/OpeningTimes">Opening Times</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="text-light" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Current Releases
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/no_time_to_die">No Time To Die</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/dune">Dune: Part One</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/eternals">Eternals</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/the_last_duel">The Last Duel</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="text-light" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Upcoming Releases
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/spiderman_no_way_home">Spider-man: No Way Home</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/the_matrix_resurrections">The Matrix Resurrections</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/the_kings_man">The King's Man</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/movie/the_batman">The Batman</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link className="text-light" to="/FilmClassification">Film Classification</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="text-light" to="/ScreenListings">Screen Listings</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="text-light" class="nav-link dropdown-toggle" href="#" id="navbarHelpDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Help
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item"><Link class="dropdown-item" to="/About">About</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/Contact">Contact Us</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/HowToGetHere">Getting Here</Link></li>
                                <li class="nav-item"><Link class="dropdown-item" to="/LocalVenues">Local Venues</Link></li>
                            </ul>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" name="search" aria-label="Search"></input>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default navbar;