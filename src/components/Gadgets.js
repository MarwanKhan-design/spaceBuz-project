import React from 'react'
import { Range, getTrackBackground } from 'react-range'
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
        <center>{minGadgets[0]}</center>
        <Range
          values={minGadgets}
          step={1}
          min={0}
          max={12}
          onChange={(values) => setMinGadgets(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: minGadgets,
                    colors: ['#548BF4', '#ccc'],
                    min: 0,
                    max: 12,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '42px',
                width: '42px',
                borderRadius: '4px',
                // backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // boxShadow: '0px 2px 6px #AAA',
              }}
            >
              <div
                style={{
                  height: '15px',
                  width: '15px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC',
                  borderRadius: '50%',
                }}
              />
            </div>
          )}
        />
      </div>
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
