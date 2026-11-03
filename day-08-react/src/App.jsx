import TeamMember from './components/TeamMember'
import './App.css'

function App() {
  return (
    <>
      <TeamMember name="An" role="Frontend Developer" experience={2} active={true} />
      <TeamMember name="Binh" role="Backend Developer" experience={3} active={false} />
      <TeamMember name="Cuong" role="Mobile Developer" experience={1} active={true} />
    </>
  )
}

export default App
