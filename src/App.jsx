import { useState } from 'react'
import './App.css'
import CatCardsSection from './components/CatCardsSection.jsx'
import CatDictionarySection from './components/CatDictionarySection.jsx'
import EmergencySection from './components/EmergencySection.jsx'
import Home from './components/Home.jsx'

function App() {
  // Setting the view or display. Choices: 'home', 'catcards', 'dictionary', 'emergency'
  const [view, setView] = useState('home');
  // The default is 'home'.

  const renderView = () => {
    switch (view) {
      case 'catcards':
        return <CatCardsSection />
      case 'dictionary':
        return <CatDictionarySection />
      case 'emergency':
        return <EmergencySection />
      // "case 'home'" and "default" are combined
      case 'home':
      // default:
        return <Home onNavigate={setView} />
      // "onNavigate" (custom prop name) allows the "Home" component to change the view state in the parent App component. "setView" is the prop's value itself.
    }
  }

  return (
    <div className="App">
      <header className="nav">
        {view !== 'home' ? (
        // If the view is not 'home' (if it is true(?)), make a button to go back to 'home' (the previous page).
          <button onClick={() => setView('home')}></button>
        ) : (
        // (If it is false(:)) if the view is 'home', just fill up the button with an empty space.
          <div></div>
        )}
      <h1 className="navtitle">동서대 고양이</h1>
      </header>

      <main>
        {renderView()}
      </main>

    </div>
  )
}

export default App;
