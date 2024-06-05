import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <nav>Logo</nav>
        <div className="flex flex-row w-2/12 justify-between">
          <Link href={"/signin"} className=" items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            SignIn
          </Link>

          <Link href={"/signup"} className=" items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            SignUp
          </Link>
        </div>
      </div>
    </main>
  );
}
