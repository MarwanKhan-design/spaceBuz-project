import React from 'react'
import { categories } from '../data'

const Checkboxes = ({ setData, checkedData, setCheckedData }) => {
  const handleToggle = (category) => () => {
    const currentCategoryId = checkedData.indexOf(category)
    const newCheckedCategoryId = [...checkedData]

    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(category)
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1)
    }

    setCheckedData(newCheckedCategoryId)
  }

  return (
    <>
      <div className='row'>
        {categories.map((category) => (
          <div class='form-check form-switch col-md-3 mt-4'>
            <input
              class='form-check-input'
              type='checkbox'
              id='flexSwitchCheckDefault'
              onChange={handleToggle(category)}
              // value={checkedData.indexOf(category.id === -1)}
            />
            <label class='form-check-label' for='flexSwitchCheckDefault'>
              {category}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default Checkboxes
