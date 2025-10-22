"use server"
import { MovieType } from "./DataType";

export const GetMovie = async (page: number) => {
    const res = await fetch(`https://my-json-server.typicode.com/moein-03/movies-next-app-api/movies?movieId=${'m' + page}&_page=${page}&_limit=1&_sort=productionYear&_order=desc`);
    if (!res.ok) throw new Error('error in handle the data');
    const data = await res.json();

    return data[0]  || null;
}

export const addView = async (movieId: string) => {
    try {
        const res = await fetch(`https://my-json-server.typicode.com/moein-03/movies-next-app-api/movies?movieId=${movieId}`);
        if (!res.ok) throw new Error("Movie not found");
        
        const movie = await res.json();

        const updatedRes = await fetch(`https://my-json-server.typicode.com/moein-03/movies-next-app-api/movies?movieId=${movieId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ movieView: movie.movieView + 1 }),
        });

        if (!updatedRes.ok) throw new Error("Failed to update views");

        const updatedMovie = await updatedRes.json();
        return updatedMovie;
    } catch (err) {
        console.error("Error adding view:", err);
        return null;
    }
}



export const searchMovies = async (query: string, page: number = 1) => {
    try {
        const res = await fetch(`https://my-json-server.typicode.com/moein-03/movies-next-app-api/movies?movieTitle_like=${query}&_page=${page}&_limit=1&_sort=productionYear&_order=desc`);
        if (!res.ok) throw new Error('error in searching the movies');

        const data = await res.json();
        return data[0] || null;
    } catch (error) {
        console.error('Search error:', error);
        return null;
    }
};

export const addMovie = async (newMovie: MovieType) => {
    const res = await fetch('https://my-json-server.typicode.com/moein-03/movies-next-app-api/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    });

    if (!res.ok) {
        throw new Error('Failed to add movie');
    }

    return await res.json();
};