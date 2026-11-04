import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { Preloader } from '../components/loader/Preloader'

export const MainLayout = () => {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased selection:bg-red-600 selection:text-white overflow-x-hidden w-full max-w-full">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
