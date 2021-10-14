import React from 'react'
import FilterModal from './FilterModal'
import { spaceBuds } from '../data'

const FilterData = ({ data, setData, showModel, setShowModel }) => {
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
          onClick={() => setData(spaceBuds)}
        >
          Reset
        </button>
      </div>
      <FilterModal
        showModel={showModel}
        setShowModel={setShowModel}
        setData={setData}
        data={data}
      />
    </>
  )
}

export default FilterData
