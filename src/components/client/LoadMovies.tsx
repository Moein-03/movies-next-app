'use client';
import { Suspense, useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { GetMovie } from "@/movieActions";
import { MovieType } from "@/DataType";
import MovieCard from "../server/MovieCard";
import LoadMovieFallBack from './LoadMovieFallBack';
import { useSearchParams, useRouter } from "next/navigation";
import { Session } from "next-auth"; 

const LoadMovies = ({ session }: { session: Session | null }) => {
     const [page, setPage] = useState<number>(1);
     const [movies, setMovies] = useState<MovieType[]>([]);
     const [isLoading, setIsLoading] = useState<boolean>(false);
     const [hasMore, setHasMore] = useState<boolean>(true);
     const { ref, inView } = useInView();
     const [Input, setInput] = useState<string>('');

     const fetchMovie = async (page: number) => {
          try {
               const movie = await GetMovie(page)
               return movie
          } catch (e) {
               console.error(e)
               return null
          }
     }

     const loadMovie = useCallback(async () => {
          if (!hasMore || isLoading) return
          setIsLoading(true)

          const newMovie = await fetchMovie(page)

          if (!newMovie) {
               setHasMore(false)
          } else if (!movies.some(m => m.movieId === newMovie.movieId)) {
               setMovies(prev => [...prev, newMovie])
               setPage(prev => prev + 1)
          }

          setIsLoading(false)
     }, [page, hasMore, isLoading, movies])

     useEffect(() => {
          if (inView) loadMovie()
     }, [inView, loadMovie])

     const router = useRouter();
     const searchParams = useSearchParams();

     const HandleSearch = (val: string) => {
          setInput(val)

          setTimeout(() => {
               const params = new URLSearchParams(searchParams.toString());
               if (val !== "") {
                    params.set("search", val.toLowerCase());
               } else {
                    params.delete("search");
               }
               router.push(`?${params.toString()}`);
          }, 2000);
     };

     const query = searchParams.get("search")?.toLowerCase() || "";

     useEffect(() => {
          setInput(query)
     }, [query])

     return (
          <div className="w-full h-fit mt-1 bg-stone-950 px-4">
               <div className='w-full flex justify-center items-center'>
                    <input
                         value={Input}
                         onChange={e => HandleSearch(e.target.value)}
                         name="search"
                         placeholder="search..."
                         className="mb-4 flex gap-2 p-2 md:w-20rem w-40rem  rounded bg-stone-800 text-white"
                    />
               </div>
               <div className="w-full h-fit flex flex-wrap mt-1 bg-stone-950">
                    {movies.find(movie => movie.movieTitle.toLocaleLowerCase().includes(query) || movie.productionYear.toString().includes(query)) ? movies.filter(movie => movie.movieTitle.toLocaleLowerCase().includes(query) || movie.productionYear.toString().includes(query)).map((movie: MovieType, index: number) => (
                         <div 
                              key={`${movie.movieId}-${index}`} 
                              className="relative w-full md:w-1/2 flex justify-center mb-4"
                         >
                              <Suspense fallback={<LoadMovieFallBack />}>
                                   <MovieCard movie={movie} index={index} session={session}/>
                              </Suspense>
                         </div>
                    )) : movies.map((movie: MovieType, index: number) => (
                         <div 
                              key={`${movie.movieId}-${index}`} 
                              className="relative w-full md:w-1/2 flex justify-center mb-4"
                         >
                              <Suspense fallback={<LoadMovieFallBack />}>
                                   <MovieCard movie={movie} index={index} session={session}/>
                              </Suspense>
                         </div> 
                    ))}
                    <div ref={ref} className="relative w-full md:w-1/2 flex justify-center mb-4">
                         {isLoading && <LoadMovieFallBack />}
                    </div>
               </div>
          </div>
     );
};

export default LoadMovies;
