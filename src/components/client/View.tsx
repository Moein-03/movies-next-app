"use client"

import { useEffect, useState } from "react";
import { addView } from "@/movieActions";

const View = ({ movieId, initialViews }: { movieId: string, initialViews: number }) => {
     const [views, setViews] = useState(initialViews);

     useEffect(() => {
          const updateViews = async () => {
               const updated = await addView(movieId);
               if (updated?.movieView !== undefined) {
                    setViews(updated.movieView);
               }
          };

          updateViews();
     }, [movieId]);

     return (
          <div className="flex justify-end items-center mt-5 bottom-3 right-3">
               <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full">
                    <span className="font-black">Views: {views}</span>
               </p>
          </div>
     );
};

export default View;
