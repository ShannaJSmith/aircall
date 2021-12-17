import React from 'react'
import CallList from './CallList.jsx'
import PropTypes from 'prop-types'
// import axios from 'axios';

const ActivityFeed = ({ callData }) => {
  return (
    <div className="details-container">
      {callData.map((data) => (
        <CallList key={data.id} data={data} />
      ))}
    </div>
  )
}

ActivityFeed.propTypes = {
  callData: PropTypes.array,
}

export default ActivityFeed
