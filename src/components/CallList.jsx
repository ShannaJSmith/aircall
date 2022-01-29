import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CallListItem from './CallListItem.jsx'
// import CallDetails from './CallDetails.jsx'

const CallList = ({ callData }) => {
  // const [showDetails, setShowDetails] = useState(false)

  // const handleShowDetails = () => {
  //   <CallDetails />
  //   setShowDetails(true)
  // }
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
