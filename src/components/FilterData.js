import React from 'react'
import FilterModal from './FilterModal'
import { spaceBuds } from '../data'

const FilterData = ({
  data,
  setData,
  showModel,
  setShowModel,
  showData,
  setShowData,
  setIsFiltered,
}) => {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <button
          className='btn btn-primary rounded-pill'
          onClick={() => setShowModel(true)}
          data-bs-target='#staticBackdrop'
        >
          Filter
        </button>
        <button
          type='button'
          class='btn rounded-pill btn-hover'
          onClick={() => setShowData(data)}
        >
          Reset
        </button>
      </div>
      <FilterModal
        showModel={showModel}
        setShowModel={setShowModel}
        setData={setData}
        data={data}
        showData={showData}
        setShowData={setShowData}
        setIsFiltered={setIsFiltered}
      />
    </>
  )
}

export default FilterData
