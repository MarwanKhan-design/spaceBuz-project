import React, { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'
import { spaceBuds } from '../data'

const RangeSlider = ({ filterId, setFilterId, data }) => {
  const STEP = 1
  const MIN = 0
  const MAX = 100

  return (
    <>
      <center>
        {filterId[0]} - {filterId[1]}
      </center>
      <Range
        values={filterId}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setFilterId(values)
        }}
        renderTrack={({ props, children }) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
                  values: filterId,
                  colors: ['#ccc', '#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX,
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
    </>
  )
}
export default RangeSlider
