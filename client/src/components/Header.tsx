import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header: FC = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/add-contact">Add Contact</Link>
    </div>
  )
}

export default Header