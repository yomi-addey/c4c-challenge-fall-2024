import './App.css'
import Dashboard from './components/Dashboard'
import Submission from './components/Submission'

function App() {
  return (
    <>
      <img class="logo" src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/C4C_Icon_Gradient.png" alt="C4C Logo"></img>
      <div class="opener">
        <h2 class="subheader">
          Projects
        </h2>
        <h1 class="header">
          Meet Our Partner Organizations
        </h1>
      </div>
      <Submission />
      <Dashboard />
    </>
  )
}

export default App
