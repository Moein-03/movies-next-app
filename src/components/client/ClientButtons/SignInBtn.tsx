"use client"
import { signIn } from "next-auth/react";

const SignInBtn = () => {
     return (
          <button
               className="btn btn-outline"
               onClick={() => signIn("github")}
          >
               SignIn With Github
          </button>
     );
};

export default SignInBtn;
