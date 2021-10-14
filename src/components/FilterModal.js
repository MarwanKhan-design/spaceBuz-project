import { Modal } from 'bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import Checkboxes from './Checkboxes'
import { spaceBuds } from '../data'
import RangeSlider from './RangeSlider'
import Gadgets from './Gadgets'

const FilterModal = ({ showModel, setShowModel, setData, data }) => {
  const [modal, setModal] = useState([])
  const [checkedCategories, setCheckedCategories] = useState([])
  const parseExceptionModal = useRef()
  const [filterId, setFilterId] = useState([0, spaceBuds.length])
  const [checkedGadgets, setCheckedGadgets] = useState([])
  const [minGadgets, setMinGadgets] = useState(0)

  useEffect(() => {
    const modal = new Modal(parseExceptionModal.current, { keyboard: false })
    setModal(modal)

    showModel && modal.show()
  }, [showModel])

  const filterData = () => {
    let dataToSet = []
    let isCategories = checkedCategories.length > 0
    let isGadgets = checkedGadgets.length > 0

    console.log(`
    isCategories: ${isCategories}
    isGadgets: ${isGadgets}
    `)

    if (!isCategories && isGadgets) {
      spaceBuds.map((d) => {
        // console.log(d.gadgets.some((i) => checkedGadgets.includes(i)))

        d.arweaveId >= filterId[0] &&
          d.arweaveId <= filterId[1] &&
          d.traits.some((i) => checkedGadgets.includes(i)) &&
          dataToSet.push(d)
        setData(dataToSet)
        // d.traits === singleCheckedCategory &&
        //   setData((prevState) => [...prevState, d])
      })
    }
    if (!isGadgets && isCategories) {
      checkedCategories.map((singleCheckedCategory) => {
        spaceBuds.map((d) => {
          if (checkedCategories.length > 0) {
            d.type === singleCheckedCategory &&
              d.arweaveId >= filterId[0] &&
              d.arweaveId <= filterId[1] &&
              dataToSet.push(d)
            setData(dataToSet)
          }
          // d.traits === singleCheckedCategory &&
          //   setData((prevState) => [...prevState, d])
        })
      })
    }
    if (isGadgets && isCategories) {
      checkedCategories.map((singleCheckedCategory) => {
        spaceBuds.map((d) => {
          if (checkedCategories.length > 0) {
            d.type === singleCheckedCategory &&
              d.arweaveId >= filterId[0] &&
              d.arweaveId <= filterId[1] &&
              d.traits.some((i) => checkedGadgets.includes(i)) &&
              dataToSet.push(d)
            setData(dataToSet)
          }
          // d.traits === singleCheckedCategory &&
          //   setData((prevState) => [...prevState, d])
        })
      })
    }
  }

  return (
    <div>
      <div className='py-2'>
        <div
          className='modal fade '
          tabIndex='-1'
          ref={parseExceptionModal}
          // onClick={() => setShowModel(false)}
          id='staticBackdrop'
          data-bs-backdrop='static'
          data-bs-keyboard='false'
          tabindex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-scrollable modal-xl'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Filter</h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                  onClick={() => setShowModel(false)}
                ></button>
              </div>
              <div className='modal-body m-5'>
                <RangeSlider filterId={filterId} setFilterId={setFilterId} />
                <br />
                <h4>Types</h4>
                <Checkboxes
                  setData={setData}
                  checkedData={checkedCategories}
                  setCheckedData={setCheckedCategories}
                />
                <Gadgets
                  setData={setData}
                  data={data}
                  checkedGadgets={checkedGadgets}
                  setCheckedGadgets={setCheckedGadgets}
                  minGadgets={minGadgets}
                  setMinGadgets={setMinGadgets}
                />
              </div>
              <div className='modal-footer'>
                <button
                  onClick={() => {
                    setShowModel(false)
                    modal.hide()
                  }}
                  type='button'
                  className='btn btn-outline-secondary'
                >
                  Dismiss
                </button>
                <button
                  onClick={() => {
                    filterData()
                    setShowModel(false)
                    modal.hide()
                  }}
                  type='button'
                  className='btn btn-outline-secondary'
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
