import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import {
  BsFillTelephoneOutboundFill,
  BsFillTelephoneInboundFill,
} from 'react-icons/bs'
import CallDetails from './CallDetails'

const CallListItem = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [callData, setCallData] = useState({})

  const onContactSelect = (data) => (e) => {
    e.preventDefault()
    setCallData(data)
    setShowDetails(true)
  }

  const closeContact = () => (e) => {
    e.preventDefault()
    setCallData({})
    setShowDetails(false)
  }

  return (
    <Fragment>
      {!showDetails ? (
        <div className="calls" onClick={onContactSelect(data)} key={j}>
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
      ) : (
        <CallDetails closeContact={closeContact}/>
      )}
    </Fragment>
  )
}

CallListItem.propTypes = {
  data: PropTypes.object,
}

export default CallListItem
