import { useState } from 'react'
import ChevronUp from '../../assets/images/chevron_up.png'
import '../Collapse/Collapse.scss'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button onClick={toggleCollapse} className="collapse__toggle">
        {title}
        {/* Utilisation du chevron up avec rotation en fonction de l'état du Collapse */}
        <img src={ChevronUp} alt="Toggle" className={`chevron ${isOpen ? 'open' : 'closed'}`} />
      </button>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  )
}

export default Collapse