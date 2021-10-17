import { Modal } from 'bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import Checkboxes from './Checkboxes'
import RangeSlider from './RangeSlider'
import Gadgets from './Gadgets'

const FilterModal = ({
  showModel,
  setShowModel,
  setData,
  data,
  showData,
  setShowData,
}) => {
  const [modal, setModal] = useState([])
  const [checkedCategories, setCheckedCategories] = useState([])
  const parseExceptionModal = useRef()
  const [checkedGadgets, setCheckedGadgets] = useState([])
  const [minGadgets, setMinGadgets] = useState([0])
  const [filterId, setFilterId] = useState([0, 100])

  useEffect(() => {
    const modal = new Modal(parseExceptionModal.current, { keyboard: false })
    setModal(modal)
    showModel && modal.show()
  }, [showModel])

  const ResetFilterForm = () => {
    document.getElementById('filter-form').reset()
    setCheckedCategories([])
    setCheckedGadgets([])
    setFilterId([0, 100])
    setMinGadgets([0])
  }

  const checkTraits = (d) => {
    let checkAgain = true

    checkedGadgets.map((gadget) => {
      if (d.spaceBud.traits.includes(gadget)) {
        checkAgain = true
      } else {
        checkAgain = false
      }
    })
    return checkAgain
  }

  const filterData = () => {
    let dataToSet = []
    let isCategories = checkedCategories.length > 0
    let isGadgets = checkedGadgets.length > 0

    // console.log(`
    // isCategories: ${isCategories}
    // isGadgets: ${isGadgets}
    // `)

    if (!isCategories && isGadgets) {
      console.log('isGadgets')
      data.map((d) => {
        // console.log(d.gadgets.some((i) => checkedGadgets.includes(i)))
        // d.traits.some((i) => checkedGadgets.includes(i)) &&
        d.id >= filterId[0] &&
          d.id <= filterId[1] &&
          checkTraits(d) &&
          d.spaceBud.traits.length >= minGadgets &&
          dataToSet.push(d)
        setShowData(dataToSet)

        // d.traits === singleCheckedCategory &&
        //   setData((prevState) => [...prevState, d])
      })
    }
    if (!isGadgets && isCategories) {
      console.log('isCategories')
      data.map((d) => {
        checkedCategories.map((singleCheckedCategory) => {
          // if (checkedCategories.length > 0) {
          d.spaceBud.type === singleCheckedCategory &&
            d.id >= filterId[0] &&
            d.id <= filterId[1] &&
            d.spaceBud.traits.length >= minGadgets &&
            dataToSet.push(d)
          setShowData(dataToSet)
          // d.traits.some((i) => checkedGadgets.includes(i)) &&
          // }
          // d.traits === singleCheckedCategory &&
          //   setData((prevState) => [...prevState, d])
        })
      })
    }
    if (isGadgets && isCategories) {
      console.log('isBoth')
      data.map((d) => {
        checkedCategories.map((singleCheckedCategory) => {
          d.spaceBud.type === singleCheckedCategory &&
            d.id >= filterId[0] &&
            d.id <= filterId[1] &&
            // d.traits.some((i) => checkedGadgets.includes(i)) &&
            checkTraits(d) &&
            d.spaceBud.traits.length >= minGadgets &&
            dataToSet.push(d)
          setShowData(dataToSet)
          // d.traits === singleCheckedCategory &&
          //   setData((prevState) => [...prevState, d])
        })
      })
    }
    if (!isGadgets && !isCategories) {
      data.map((d) => {
        d.id >= filterId[0] &&
          d.id <= filterId[1] &&
          d.spaceBud.traits.length >= minGadgets &&
          dataToSet.push(d)
        setShowData(dataToSet)
      })
    }
  }

  return (
    <form id='filter-form'>
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
                <RangeSlider
                  filterId={filterId}
                  setFilterId={setFilterId}
                  data={data}
                />
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
                    ResetFilterForm()
                  }}
                  type='button'
                  className='btn btn-outline-secondary'
                >
                  Reset
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
    </form>
  )
}

export default FilterModal
