"use client"

import { signOut } from "next-auth/react"

const SignOutBtn = () => {
     return (
          <button
               className="btn btn-outline"
               onClick={() => signOut({ callbackUrl: '/' })}
          >
               Sign Out
          </button>
     );
};

export default SignOutBtn;
