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
        <IconContext.Provider
          value={{ color: '#4CC355', size: 30, style: { cursor: 'pointer' } }}
        >
          <FaPhoneAlt onClick={() => console.log('calls')} />
          <BsFillPersonFill onClick={() => console.log('addressBook')} />
          <BiDialpadAlt onClick={() => console.log('dialpad')} />
          <MdSettings onClick={() => console.log('settings')} />
        </IconContext.Provider>
      </span>
    </footer>
  )
}

export default Navigation
