import { Router } from "express";
import { Movie } from "../models/Movie.js";

const router = Router();

router.get("/movies", async (rq, rs) => {
    const movies = await Movie.findAll();
    rs.json(movies);
})

router.get("/movies/:movieId/", async (rq, rs) => {
    const { movieId } = rq.params;
    const movie = await Movie.findByPk(movieId);
    rs.json(movie);
})

router.post("/movies/", async (rq, rs) => {
    const { title, director, year } = rq.body;

    if (!title.length) {
        return rs.status(400).send("Titulo no puede ser vacio");
    }

    const newMovie = await Movie.create({
        title,
        director,
        year
    });
    rs.json(newMovie);
})

export default router;