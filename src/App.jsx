import HomePage from './pages/HomePage'
import ContactMePage from './pages/ContactMePage'
import FooterComponent from './features/components/FooterComponent'
import ProyectsPage from './pages/ProyectsPage'
import SkillsPage from './pages/SkillsPage'
import ThemeToggleComponent from './features/components/ThemeToggleComponent'

function App() {
  return (
    <>
      <ThemeToggleComponent />
      <HomePage />
      <SkillsPage />
      <ProyectsPage/>
      <ContactMePage />
      <FooterComponent />
    </>
  )
}

export default App
