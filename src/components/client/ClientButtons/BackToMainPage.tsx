"use client"
import { useRouter } from "next/navigation"
const BackToMainPage = () => {
     const router = useRouter()

     return <button className="btn btn-outline btn-warning mt-5" onClick={() => router.back()}>Back</button>
}

export default BackToMainPage