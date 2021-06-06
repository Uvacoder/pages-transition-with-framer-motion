import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center flex-col justify-center mt-80">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold">Let's create page transitions</h1>
      <button
        className="p-2 ring-1 ring-gray-500"
        onClick={() => router.push("/about")}
      >
        Go to about me
      </button>
    </div>
  );
}
