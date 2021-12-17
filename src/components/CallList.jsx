import React from 'react'
import PropTypes from 'prop-types'

const CallList = ({ data }) => {
  return (
    <div>
      <p key={data.id}>{data.call_type}</p>
      <p>{data.direction}</p>
      <p>{data.from} called</p>
      <p>at {data.created_at.slice(11, 16)}</p>
    </div>
  )
}

CallList.propTypes = {
  data: PropTypes.object
}

export default CallList
