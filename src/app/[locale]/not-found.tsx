import Link from 'next/link';


export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600 animate-pulse">
          404
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          But don&apos;t worry, you can always find your way back.
        </p>
        <Link className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:scale-105 transform transition shadow-lg hover:shadow-purple-600/50" href="/">
            Take me home
        </Link>
      </div>
    </div>
  );
}