import React from 'react'
import PropTypes from 'prop-types'
import CallListItem from './CallListItem.jsx'

const CallList = ({ callData }) => {
  return (
    <div className="details-container">
      {callData.map((data) => (
        <CallListItem key={data.id} data={data} />
      ))}
    </div>
  )
}

CallList.propTypes = {
  callData: PropTypes.array,
}

export default CallList
