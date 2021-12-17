import React from 'react'
import PropTypes from 'prop-types'
import {
  BsFillTelephoneOutboundFill,
  BsFillTelephoneInboundFill,
} from 'react-icons/bs'

const CallList = ({ data }) => {
  return (
    <div>
      <p
        style={
          data.call_type === 'missed'
            ? { color: 'red' }
            : data.call_type === 'answered'
            ? { color: 'green' }
            : null
        }
      >
        {data.call_type}
      </p>
      {data.direction === 'outbound' ? (
        <BsFillTelephoneOutboundFill />
      ) : (
        <BsFillTelephoneInboundFill />
      )}
      <p>{data.from} called</p>
      <p>at {data.created_at.slice(11, 16)}</p>
    </div>
  )
}

CallList.propTypes = {
  data: PropTypes.object,
}

export default CallList
