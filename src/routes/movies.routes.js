import { Router } from "express";
import { createMovie, deleteMovie, findMovie, getMovies, updateMovie } from "../services/movies.service.js";

const router = Router();

router.get("/movies", getMovies);

router.get("/movies/:movieId/", findMovie);

router.post("/movies/", createMovie);

router.put("/movies/:id", updateMovie);

router.delete("/movies/:id", deleteMovie);

export default router;