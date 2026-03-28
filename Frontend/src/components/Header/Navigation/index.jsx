import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5"
import { LiaAngleDownSolid } from "react-icons/lia"
import { Link } from 'react-router-dom'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CategoryPanel from './CategoryPanel'

const Navigation = () => {

  const [isCategoryPanelOpen, setIsCategoryPanelOpen] = useState(false)

  const openCategoryPanel = () => {
    setIsCategoryPanelOpen(true)
  }

  const closeCategoryPanel = () => {
    setIsCategoryPanelOpen(false)
  }

  return (
    <>
      <nav className="navigation border-b border-gray-200 py-3">
        <div className='container flex items-center justify-between'>

          {/* Shop by Categories Button */}
          <div className='col_1 w-[20%]'>
            <button
              className='!text-black gap-2 w-full uppercase font-semibold text-[15px] flex items-center px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-200'
              onClick={openCategoryPanel}
            >
              <IoMenuSharp className='text-[18px]' />
              SHOP BY CATEGORIES
              <LiaAngleDownSolid className='text-[13px]' />
            </button>
          </div>

          {/* Navigation Links */}
           <div className='col-2 w-[60%]'>
            <ul className='flex items-center gap-4'>
              <li className='list-none'>
                <Link
                  to="/"
                  className='link transition text-[14px] font-[500] hover:text-red-500'
                >
                  Home
                </Link>
              </li>

              {/* Individual category links that open drawer */}
              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Fashion
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Electronics
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Accessories
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Bags
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Footwear
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Groceries
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Beauty
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Wellness
                </span>
              </li>

              <li className='list-none cursor-pointer'>
                <span className='link transition text-[14px] font-[500] hover:text-red-500'>
                  Jewellery
                </span>
              </li>
            </ul>
          </div>

          {/* Free Shipping */}
          <div className='col_3 w-[20%] flex justify-end'>
            <div className='flex items-center gap-1 bg-red-50 border border-red-200 rounded-full px-3 py-1'>
              <LocalShippingIcon className='text-red-500 text-[16px]' />
              <span className='text-red-500 text-[12px] font-semibold'>
                Free Shipping Over KSh 100K
              </span>
            </div>
          </div>

        </div>
      </nav>

      {/* Category Panel */}
      <CategoryPanel
        open={isCategoryPanelOpen}
        onClose={closeCategoryPanel}
      />
    </>
  )
}

export default Navigation