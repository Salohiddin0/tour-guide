import Rectangle from './assets/Rectangle 140.png'

const App = () => {
  return (
    <div className='min-h-screen relative'>
      {/* Background Image - Full Screen */}
      <div className='absolute inset-0 z-0'>
        <img
          src={Rectangle || '/placeholder.svg'}
          alt='Hero background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10'></div>
      </div>

      {/* Header - Overlaid on background */}
      <header className='absolute top-0 left-0 right-0 z-20 bg-transparent'>
        <div className='max-w-6xl mx-auto flex items-center justify-between px-8 py-6'>
          <div className='logo'>
            <span className='text-2xl font-bold text-white'>tour guide</span>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#'
              className='text-white/90 hover:text-white font-medium transition-colors'
            >
              Home
            </a>
            <a
              href='#'
              className='text-white/90 hover:text-white font-medium transition-colors'
            >
              About Us
            </a>
            <a
              href='#'
              className='text-white/90 hover:text-white font-medium transition-colors'
            >
              Popular Destinations
            </a>
            <a
              href='#'
              className='text-white/90 hover:text-white font-medium transition-colors'
            >
              Our Packages
            </a>
            <a
              href='#'
              className='text-white/90 hover:text-white font-medium transition-colors'
            >
              Help
            </a>
          </nav>

          <button className='bg-[#FFDA32] text-black font-semibold px-6 py-3 rounded-lg transition-colors'>
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Content - Overlaid on background */}
      <main className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
            We Find The Best Tours For You
          </h1>

          <p className='text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
            <br />
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat
            <br />
            sunt nostrud amet.
          </p>

          {/* Watch Video Button */}
          <button className='inline-flex items-center gap-3 bg-white/90 hover:bg-white text-gray-800 font-semibold px-8 py-4 rounded-full mb-8 transition-all hover:-translate-y-1 shadow-lg'>
            <div className='w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center'>
              <span className='text-black text-sm ml-0.5'>▶</span>
            </div>
            Watch Video
          </button>

          {/* Search Form */}
          <div className='absolute inset-x-0 bottom-0 z-10 bg-white rounded-2xl p-4 shadow-2xl max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-end'>
              {/* Location Field */}

              {/* Search Button */}
              <button className='bg-[#FFDA32] text-black font-semibold w-[150px] h-[54px] rounded-[40px] left-[100px] z-50'>
                Search
              </button>
            </div>
          </div>

          {/* Search Form End */}
        </div>
      </main>

      {/* Bottom Section */}
      <section className='relative z-10 bg-gray-50 py-16 px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          Explore Popular Cities
        </h2>
      </section>
    </div>
  )
}

export default App
