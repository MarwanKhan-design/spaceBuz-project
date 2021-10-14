import React from 'react'
import { traits } from '../data'

const Gadgets = ({
  setData,
  data,
  checkedGadgets,
  setCheckedGadgets,
  minGadgets,
  setMinGadgets,
}) => {
  const handleToggle = (trait) => () => {
    const currentCategoryId = checkedGadgets.indexOf(trait)
    const newCheckedCategoryId = [...checkedGadgets]

    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(trait)
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1)
    }

    setCheckedGadgets(newCheckedCategoryId)
  }
  return (
    <div>
      <h4 className='mt-3'>Gadgets</h4>
      <div className='row'>
        {traits.map((trait) => (
          <div class='form-check form-switch col-md-3 mt-4'>
            <input
              class='form-check-input'
              type='checkbox'
              id='flexSwitchCheckDefault'
              onChange={handleToggle(trait)}
              // value={checkedData.indexOf(category.id === -1)}
            />
            <label class='form-check-label' for='flexSwitchCheckDefault'>
              {trait}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gadgets
