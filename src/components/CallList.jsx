import React from 'react'
import PropTypes from 'prop-types'

const CallList = ({ data }) => {
  return (
    <div>
      <p key={data.id}>{data.call_type}</p>
      <p>{data.direction}</p>
      <p>{data.from} called</p>
      <p>on {data.created_at}</p>
    </div>
  )
}

CallList.propTypes = {
  data: PropTypes.object
}

export default CallList
