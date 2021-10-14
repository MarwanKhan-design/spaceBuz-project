import React, { useEffect, useState } from 'react'
import FilterData from '../components/FilterData'
import ShowData from '../components/ShowData'
import { spaceBuds } from '../data'

const Explore = () => {
  const [data, setData] = useState(spaceBuds)
  const [showModel, setShowModel] = useState(false)

  // useEffect(() => {
  //   setData([...mainData])
  // }, [])

  return (
    <div className='container mt-5'>
      <FilterData
        data={data}
        setData={setData}
        showModel={showModel}
        setShowModel={setShowModel}
      />
      <div className='row'>
        <ShowData data={data} mainData={spaceBuds} />
      </div>
    </div>
  )
}

export default Explore
