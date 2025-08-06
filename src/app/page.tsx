import LoadMovies from "@/components/client/LoadMovies";
import { auth } from "@/SessionAuth/server";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex flex-col px-1">
      <LoadMovies session={session}/>
      <br />
    </main>
  );
}
