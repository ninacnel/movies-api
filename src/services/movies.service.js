import { Movie } from "../models/Movie.js";

export const getMovies = async (rq, rs) => {
    const movies = await Movie.findAll();
    rs.json(movies);
};

export const findMovie = async (rq, rs) => {
    const { movieId } = rq.params;
    const movie = await Movie.findByPk(movieId);
    rs.json(movie);
};

export const createMovie = async (rq, rs) => {
    const {
        title,
        director,
        year,
        duration,
        cast,
        country,
        isFree,
        image
    } = rq.body;

    if (!title || !title.length) {
        return rs.status(400).send("Titulo no puede ser vacio");
    }

    const newMovie = await Movie.create({
        title,
        director,
        year,
        duration,
        cast: cast.join(", "),
        country,
        isFree,
        image
    });

    rs.json(newMovie);
};

export const updateMovie = async (rq, rs) => {
    const { id } = rq.params;
    const { title, director, year } = rq.body;

    const movie = await Movie.findByPk(id);

    if (!movie) {
        return rs.status(404).send("Pelicula no encontrada.");
    }

    await movie.update({
        title,
        director,
        year
    });

    await movie.save();

    rs.json(movie);
};

export const deleteMovie = async (rq, rs) => {
    const { id } = rq.params;
    const movie = await Movie.findByPk(id);

    if (!movie)
        return rs.status(404).send("Pelicula no encontrada.");

    await movie.destroy();

    rs.send(`Pelicula con ID: ${id} eliminada.`);
};
