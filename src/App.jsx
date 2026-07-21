import HomePage from './pages/HomePage'
import ContactMePage from './pages/ContactMePage'
import FooterComponent from './features/components/FooterComponent'
import ProyectsPage from './pages/ProyectsPage'
import SkillsPage from './pages/SkillsPage'
import NavBarComponent from './features/components/NavBarComponent'

function App() {
  return (
    <>
      <NavBarComponent />
      <HomePage />
      <SkillsPage />
      <ProyectsPage/>
      <ContactMePage />
      <FooterComponent />
    </>
  )
}

export default App
