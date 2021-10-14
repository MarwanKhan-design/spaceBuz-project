import React from 'react'

const ShowData = ({ data, mainData }) => {
  return (
    <>
      <div className='d-flex justify-content-evenly text-bold text-secondary'>
        <span>
          <span className='fw-bolder'>Total:</span> {mainData.length}
        </span>
        <span>
          <span className='fw-bolder'>Result:</span> {data.length}
        </span>
        <span>
          <span className='fw-bolder'>ID:</span> {data.length}
        </span>
      </div>
      {data.length === 0 ? (
        <h4 className='d-flex justify-content-evenly text-bold text-secondary mt-5'>
          No SpaceBud found
        </h4>
      ) : (
        <>
          {data.map((singleData) => (
            <div className='col-md-3 mt-3 '>
              <div class='card border-light '>
                <img
                  src={singleData.image}
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title text-center text-secondary'>
                    {singleData.name}
                  </h5>
                  <p>
                    {singleData.traits.map((gadget) => (
                      <>{gadget} || </>
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
