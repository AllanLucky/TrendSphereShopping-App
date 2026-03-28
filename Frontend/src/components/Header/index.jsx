import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import { FaUser, FaHeart } from 'react-icons/fa'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Tooltip from '@mui/material/Tooltip'
import Navigation from './Navigation'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: -5,
    right: 0,
    transform: 'translateX(50%)',
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}))

const Header = () => {
  return (
    <header>
      {/* Top Strip */}
      <div className="top-strip border-b border-gray-200 p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-[50%]">
            <Link to="/shop">
              <p className="text-[14px] font-[500] link hover:text-red-500 transition">
                New season drip iko na deal – up to 50% off 🔥
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-4 w-[50%]">
            <Link to="/help-center">
              <span className="text-[14px] font-[500] link hover:text-red-500 transition">
                Help Center
              </span>
            </Link>
            <Link to="/order-tracking">
              <span className="text-[14px] font-[500] link hover:text-red-500 transition">
                Order Tracking
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header py-3 border-b border-gray-200 bg-red-700">
        <div className="container mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="w-[25%]">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/kiliCart1.png"
                alt="KiliCart Logo"
                className="w-[70px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="w-[45%]">
            <Search />
          </div>

          {/* User Actions */}
          <div className="w-[30%] flex items-center justify-end gap-4">

            {/* Login */}
            <Tooltip title="Login to your account" arrow>
              <Link to="/login" className="group flex items-center gap-2">
                <div className="bg-red-700 rounded-full p-2 flex items-center justify-center shadow-sm transition-all duration-200">
                  <FaUser className="text-white group-hover:text-black text-[22px] transition-all duration-200" />
                </div>
                <span className="text-white group-hover:text-black font-semibold transition">
                  Login
                </span>
              </Link>
            </Tooltip>

            {/* Wishlist */}
            <Tooltip title="Your Wishlist" arrow>
              <Link to="/wishlist" className="group flex items-center gap-2">
                <div className="bg-red-700 rounded-full p-2 flex items-center justify-center shadow-sm transition-all duration-200">
                  <FaHeart className="text-white group-hover:text-black text-[22px] transition-all duration-200" />
                </div>
                <span className="text-white group-hover:text-black font-semibold transition">
                  Wishlist
                </span>
              </Link>
            </Tooltip>

            {/* Cart */}
            <Tooltip title="Your Cart" arrow>
              <Link to="/cart" className="group flex items-center gap-2">
                <div className="bg-red-700 rounded-full p-2 flex items-center justify-center shadow-sm transition-all duration-200">
                  <StyledBadge badgeContent={4} color="error" overlap="circular">
                    <ShoppingBasketIcon className="text-white group-hover:text-black transition-all duration-200" fontSize="small" />
                  </StyledBadge>
                </div>
                <span className="text-white group-hover:text-black font-semibold transition">
                  Cart
                </span>
              </Link>
            </Tooltip>

          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  )
}

export default Header