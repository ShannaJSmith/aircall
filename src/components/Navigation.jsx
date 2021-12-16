import React from 'react'
import { IconContext } from 'react-icons'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiDialpadAlt } from 'react-icons/bi'
import { MdSettings } from 'react-icons/md'

const Navigation = () => {
  return (
    <footer>
      <span className="nav-icons">
        <IconContext.Provider value={{ color: 'green', size: 30 }}>
          <FaPhoneAlt /> <BsFillPersonFill /> <BiDialpadAlt />
          <MdSettings />
        </IconContext.Provider>
      </span>
    </footer>
  )
}

export default Navigation
