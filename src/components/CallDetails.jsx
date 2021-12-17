import React from 'react'
import PropTypes from 'prop-types'

const CallDetails = ({ data }) => {
  return (
    <div>
      <p key={data.id}>Call Type {data.call_type}</p>
      <p>Direction {data.direction}</p>
      <p>Call From {data.from}</p>
      <p>Call To {data.to}</p>
      <p>Via {data.via}</p>
      <p>Date {data.created_at}</p>
      <p>Call Duration {data.duration}</p>
    </div>
  )
}

CallDetails.propTypes = {
  data: PropTypes.object
}

export default CallDetails