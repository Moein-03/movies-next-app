"use client"
import SignInBtn from "../client/ClientButtons/SignInBtn";
import SignOutBtn from "../client/ClientButtons/SignOutBtn";
import { Session } from "next-auth";

const Avatar =  ( { session }: { session: Session }) => {

     return (
          <div className="flex gap-2">
               {session?.user?.name ? (
                    <div className="dropdown dropdown-end">
                         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                   <img
                                        alt={`${session.user.name}`}
                                        src={`${session.user.image}`}
                                   />
                              </div>
                         </div>
                         <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                         >
                              <li><SignOutBtn/></li>
                         </ul>
                    </div>
               ) : (
                    <SignInBtn/>
               )}
          </div>
     )
}

export default Avatar
