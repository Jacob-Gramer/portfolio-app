import Link from "next/link";

const Header = () => {
  return (
    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-center xl:text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Welcome to my</span>{' '}
          <span className="block text-indigo-600 dark:text-indigo-400 xl:inline">own little space</span>
        </h1>
        <br/>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl ">
          My name is Jacob Gramer and I am a software developer. Feel free to check my projects and explore some of my journey in tech.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <Link href="/portfolios" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-500 px-8 py-3 text-base font-medium text-white dark:text-gray-200 hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                My Projects
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/cv.pdf"
              target="_blank"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-200 px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-300 md:py-4 md:px-10 md:text-lg"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header;