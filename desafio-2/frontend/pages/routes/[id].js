import Head from "next/head";
import Link from "next/link";

export default function Home({ route }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Imersão Fullcycle - Desafio 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <Link href="/">
            <a className="text-blue-600">Imersão Fullcycle - Desafio 2!</a>
          </Link>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">{route.title} &rarr;</h3>
            <p className="mt-4 text-xl">
              {route.startPos.lat} - {route.startPos.lng}
            </p>
            <p className="mt-4 text-xl">
              {route.endPos.lat} - {route.endPos.lng}
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `http://${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/routes`
  );
  const routes = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = routes.map((route) => ({
    params: { id: route._id },
  }));

  console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `http://${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/routes/${params.id}`
  );
  const route = await res.json();

  // Pass post data to the page via props
  return { props: { route } };
}
