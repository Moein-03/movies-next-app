export default function LoadMovieFallBack() {
     return (
          <div className="card card-side bg-base-100 shadow-sm py-1 w-[27rem] h-[20rem] mt-1 animate-pulse">
               <div className="w-[1200px] h-full bg-gray-700 rounded-l-lg"></div>
               <div className="card-body space-y-3">
                    <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    <div className="h-10 bg-gray-700 rounded w-24 ml-auto"></div>
               </div>
          </div>
     )
}