import { CastType } from "@/DataType"
const CastCard = ({ castParams }: { castParams: CastType }) => {
     const { castName, castPic } = castParams

     return (
          <div className="card bg-base-100 w-25 h-40 shadow-sm">
               <figure className="px-2 mt-2">
                    <img
                         src="/single-man-icon.jpg"
                         alt="Shoes"
                         className="rounded-xl" 
                    />
               </figure>
               <p className="text-sm px-2 py-1">{castName}</p>
          </div>
     )
}

export default CastCard
