import Avatar from "./Avatar"
import { auth } from "../../SessionAuth/server"
import { Session } from "next-auth"
const Navbar = async () => {
     const session = await auth();

     return (
          <div className="fixed z-10 w-full">
               <div className="navbar bg-base-100 shadow-sm">
                    <div className="flex-1">
                         <a className="btn btn-ghost text-xl">movies</a>
                    </div>
                    <Avatar session={session}/>
               </div>
          </div>
     )
}

export default Navbar