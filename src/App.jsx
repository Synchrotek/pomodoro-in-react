import './App.css'
import ProgressBar from './components/ProgressBar'
import Tabs from './components/Tabs'
import Timer from './components/Timer'

function App() {
  return (
    <div className='h-screen flex flex-col items-center py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white'>
      {/* title ------------------------------------ */}
      <h1 className="sm:text-4xl text-2xl px-8 py-2 font-bold border-black border-b-4">
        Pomodoro Timer
      </h1>
      {/* Tabs ------------------------------------- */}
      <Tabs />
      {/* Timer ------------------------------------ */}
      <Timer />
      {/* <ProgressBar /> */}
      {/* Setting Icons ---------------------------- */}
    </div>
  )
}

export default App
