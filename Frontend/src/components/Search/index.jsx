import React from 'react'
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";
import './SearchStyle.css'

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input 
        type="text"
        placeholder="Search for products, brands and more..."
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />

      <Button className='!absolute top-[8px] right-[8px] z-50 bg-transparent hover:bg-transparent border-none !w-[37px] !min-w-[37px] !h-[37px] !rounded-full flex items-center justify-center !text-black'>
        <IoSearchSharp className='text-[30px] text-gray-600' />
      </Button>
    </div>
  )
}

export default Search;