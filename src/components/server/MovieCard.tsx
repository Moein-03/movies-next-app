import { MovieType } from '@/DataType'
import { MotionDiv } from '../client/MotionDiv'
import Image from 'next/image'
import Link from 'next/link'

const variants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1 }
}

const MovieCard = ({ movie, index, session }: { movie: MovieType, index: number, session: any }) => {
     return (
          <MotionDiv
               className="card card-side bg-base-100 shadow-sm py-1 w-[27rem] h-[20rem] mt-1"
               variants={variants}
               initial="hidden"
               animate="visible"
               transition={{
                    delay: index * 0.25,
                    ease: "easeInOut",
                    duration: 0.5
               }}
          >
               <figure className='w-[1200px] h-full relative'>
                    <Image
                         src={`https://my-json-server.typicode.com/moein-03/movies-next-app-api${movie.moviePic}`}
                         alt={movie.movieTitle}
                         fill
                         className="object-cover"
                         sizes="(max-width: 800px) 300vw, 400px"
                    />
               </figure>
               <div className="card-body">
                    <h2 className="card-title">{movie.movieTitle}</h2>
                    <p>{movie.movieDescription}</p>
                    <span>Year: {movie.productionYear}</span>
                    <div className="card-actions justify-end">
                         {session?.user?.name ? (
                              <Link href={`/${movie.movieId}`}>
                                   <button className="btn btn-outline btn-warning">Read Detials</button>
                              </Link>
                         ) : (
                              <h2 className='text-orange-300'>SignIn to Read Details</h2>
                         )}
                    </div>
               </div>
          </MotionDiv>
     )
}

export default MovieCard