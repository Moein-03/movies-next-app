const MoviePageFallback = () => {
     return (
          <div className='flex flex-col md:flex-row px-1 mt-1'>
               <div className='w-[full] flex justify-center h-100 md:w-20% animate-pulse'>
                    <img
                         className="w-90 h-100"
                    />
               </div>

               <div className="md:w-full flex flex-col justify-between py-5 px-10">
                    <h2 className="card-title animate-pulse"></h2>
                    <p className="animate-pulse"></p>
                    <span className='mt-2 animate-pulse'></span>
                    <p className='mt-3 animate-pulse' ></p>
                    <div className='flex flex-wrap flex-row justify-start items-center gap-2 mt-1 animate-pulse'>
                         <div className="card bg-base-100 w-25 h-40 shadow-sm"></div>
                    </div>
               </div>
          </div>
     )
}

export default MoviePageFallback