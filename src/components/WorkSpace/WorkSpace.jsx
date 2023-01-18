import React from 'react'
import './workSpace.scss'

const WorkSpace = (props) => {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}

export default WorkSpace