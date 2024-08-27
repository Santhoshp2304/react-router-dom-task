import React from 'react'
import FullStackDevelopment from './FullStackDevelopment'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

function All() {
  return (
    <div>
        <br />
        <h1 className='text-center'>ALL</h1>
        <FullStackDevelopment/>
        <DataScience/>
        <CyberSecurity/>
        <Career/>
    </div>
  )
}

export default All