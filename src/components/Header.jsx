
import cookicon from "../images/cookicon.png"

export default function Header() {
  return (
    <>
    <header className="header">
      <img className="header-item" src={cookicon} alt="cook icon " width="40px"/>
      <h3 className="header-item">Welcome to My Restaurant</h3>
    </header>
    </>
  )
} 

