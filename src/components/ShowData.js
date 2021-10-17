import React, { useEffect, useState } from 'react'

const ShowData = ({ data, mainData, showData, setShowData }) => {
  return (
    <>
      <div className='d-flex justify-content-evenly text-bold text-secondary'>
        <span>
          <span className='fw-bolder'>Total:</span> {data.length}
        </span>
        <span>
          <span className='fw-bolder'>Result:</span> {showData.length}
        </span>
        <span>
          <span className='fw-bolder'>ID:</span> {showData.length}
        </span>
      </div>
      {showData.length === 0 ? (
        <h4 className='d-flex justify-content-evenly text-bold text-secondary mt-5'>
          No SpaceBud found
        </h4>
      ) : (
        <>
          {showData.map((singleData) => (
            <div className='col-md-3 mt-3 '>
              <div class='card border-light '>
                <img
                  src={singleData.spaceBud.image}
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title text-center text-secondary'>
                    {singleData.spaceBud.name}
                  </h5>
                  <p>
                    {singleData.spaceBud.traits.map((trait) => (
                      <>{trait} || </>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default ShowData
