import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  BsFillTelephoneOutboundFill,
  BsFillTelephoneInboundFill,
} from 'react-icons/bs'

const CallList = ({ data}) => {
  const [showDetails, setShowDetails] = useState(false)


  return (
    <div className="calls">
      <p
        style={
          data.call_type === 'missed'
            ? { color: 'red' }
            : data.call_type === 'answered'
            ? { color: 'green' }
            : null
        }
      >
        {data.direction === 'outbound' ? (
          <BsFillTelephoneOutboundFill />
        ) : (
          <BsFillTelephoneInboundFill />
        )}
        {data.call_type}
      </p>
      <p>{data.from} called</p>
      <p>at {data.created_at.slice(11, 16)}</p>
    </div>
  )
}

CallList.propTypes = {
  data: PropTypes.object,
}

export default CallList
