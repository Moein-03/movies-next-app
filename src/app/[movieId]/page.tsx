import React from 'react'
import { GetMovie } from '@/movieActions';
import { MovieType } from '@/DataType';
import { Suspense } from 'react';
import CastCard from '@/components/server/CastCard';
import { MotionDiv } from '@/components/client/MotionDiv';
import MoviePageFallback from '@/components/server/MoviePageFallback';
import BackToMainPage from '@/components/client/ClientButtons/BackToMainPage';
import { auth } from '@/SessionAuth/server';

const page = async ({ params }: { params: { movieId: string } }) => {
     const session = await auth();
     const { movieId } = params;
     const page = movieId.slice(1, movieId.length);
     let movie: MovieType;

     try {
          movie = await GetMovie(Number(page));
     } catch (error) {
          throw new Error('not Found');
     }

     const variants = {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
     }
     
     return (
          <>
          {session?.user.name ? (
               <Suspense fallback={<MoviePageFallback/>}>
                    <MotionDiv
                         className='flex flex-col md:flex-row px-1 mt-1'
                         variants={variants}
                         initial="hidden"
                         animate="visible"
                         transition={{
                              delay: 0.25,
                              ease: "easeInOut",
                              duration: 0.5
                         }}
                    >
                         <div className='w-[full] flex justify-center h-100 md:w-20%'>
                              <img
                                   src={`http://localhost:6500${movie.moviePic}`}
                                   alt={movie.movieTitle}
                                   className="w-[60%] md:w-[23rem] h-100"
                              />
                         </div>

                         <div className="md:w-full flex flex-col justify-between py-5 px-10">
                              <h2 className="card-title">{movie.movieTitle}</h2>
                              <p>{movie.movieDescription}</p>
                              <span className='mt-2'>Year: {movie.productionYear}</span>
                              <p className='mt-3'>Casts: </p>
                                   <div className='flex flex-col md:flex-row w-full items-center justify-between'>
                                        <div className='flex flex-wrap flex-row justify-start items-center gap-2 mt-1'>
                                        {movie.movieCast.map(actor => (
                                             <CastCard key={actor.castId} castParams={actor}/>
                                        ))}
                                   </div>
                                   <BackToMainPage/>
                              </div>
                         </div>
                    </MotionDiv>
               </Suspense>
          ) : (
               <div className='flex h-screen w-full justify-center items-center'>
                    <p>you didn't SignIn!</p>
                    <BackToMainPage/>
               </div>
          )}
          </>
     )
}

export default page