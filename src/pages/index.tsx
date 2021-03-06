import Topbar from '../components/Topbar'

export default function Home() {
  return (
    <>
      <Topbar userName="Zana" />
      <div className="container flex items-center p-4 mx-auto justify-center">
        <main>
          <h1 className="font-mono text-xl code">
            Welcome to <span className="text-purple-700">Nextjs</span>, <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span>
          </h1>
          <p>This is my basic template.</p>
        </main>
      </div>
    </>
  )
}
