import React, { useEffect, useState } from 'react'
import FilterData from '../components/FilterData'
import ShowData from '../components/ShowData'
import { spaceBuds } from '../data'

const Explore = () => {
  const [data, setData] = useState([])
  const [showModel, setShowModel] = useState(false)
  const [showData, setShowData] = useState(data)
  const [isFiltered, setIsFiltered] = useState(false)

  const makeArrayFromJson = () => {
    for (let index = 0; index <= 100; index++) {
      setData((prevState) => [
        ...prevState,
        { spaceBud: spaceBuds[index], id: index },
      ])
      setShowData((prevState) => [
        ...prevState,
        { spaceBud: spaceBuds[index], id: index },
      ])
    }
  }

  useEffect(() => {
    makeArrayFromJson()
  }, [])

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
        showData={showData}
        setShowData={setShowData}
        setIsFiltered
      />
      <div className='row'>
        <ShowData
          data={data}
          mainData={spaceBuds}
          showData={showData}
          setShowData={setShowData}
        />
      </div>
    </div>
  )
}

export default Explore
