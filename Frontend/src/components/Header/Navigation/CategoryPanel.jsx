import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { IoClose } from "react-icons/io5"
import { PiPlusSquareBold, PiMinusSquareBold } from "react-icons/pi"

// ✅ Import professional icons for categories
import CheckroomIcon from '@mui/icons-material/Checkroom'
import DevicesIcon from '@mui/icons-material/Devices'
import SpaIcon from '@mui/icons-material/Spa'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import WorkIcon from '@mui/icons-material/Work'
import HikingIcon from '@mui/icons-material/Hiking'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DiamondIcon from '@mui/icons-material/Diamond'
import ChairIcon from '@mui/icons-material/Chair'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import ChildCareIcon from '@mui/icons-material/ChildCare'

const CategoryPanel = ({ open, onClose }) => {

  const [expandedCategory, setExpandedCategory] = useState(null)

  const categories = [
    { name: "Fashion", icon: <CheckroomIcon />, sub: ["Men", "Women", "Kids"] },
    { name: "Electronics", icon: <DevicesIcon />, sub: ["Phones", "Laptops", "Accessories"] },
    { name: "Beauty", icon: <SpaIcon />, sub: ["Skin", "Hair", "Makeup"] },
    { name: "Groceries", icon: <LocalGroceryStoreIcon />, sub: ["Fruits", "Vegetables", "Snacks"] },
    { name: "Bags", icon: <WorkIcon />, sub: ["Backpacks", "Handbags", "Wallets"] },
    { name: "Footwear", icon: <HikingIcon />, sub: ["Sneakers", "Sandals", "Boots"] },
    { name: "Wellness", icon: <FavoriteIcon />, sub: ["Supplements", "Yoga", "Fitness"] },
    { name: "Jewellery", icon: <DiamondIcon />, sub: ["Rings", "Necklaces", "Earrings"] },
    { name: "Home & Living", icon: <ChairIcon />, sub: ["Furniture", "Decor", "Kitchen", "Bedding"] },
    { name: "Sports & Outdoors", icon: <SportsSoccerIcon />, sub: ["Gym Equipment", "Outdoor Gear", "Cycling", "Camping"] },
    { name: "Baby & Kids", icon: <ChildCareIcon />, sub: ["Baby Care", "Toys", "Clothing", "School Supplies"] },
  ]

  const toggleCategory = (name) => {
    setExpandedCategory(expandedCategory === name ? null : name)
  }

  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 260 }} role="presentation">
        
        {/* Header */}
        <h3 className='font-bold text-[16px] uppercase p-4 flex justify-between items-center border-b'>
          Shop by Categories
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-red-500 transition'
          >
            <IoClose size={20} />
          </button>
        </h3>

        <List>
          {categories.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  className='hover:bg-red-50 transition'
                  onClick={() => item.sub ? toggleCategory(item.name) : null}
                >
                  <ListItemIcon className='text-gray-600'>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    className='text-[14px] font-[500]'
                  />
                  {item.sub && item.sub.length > 0 && (
                    expandedCategory === item.name
                      ? <PiMinusSquareBold className='text-gray-400 text-[18px] ml-auto hover:text-red-500 transition' />
                      : <PiPlusSquareBold className='text-gray-400 text-[18px] ml-auto hover:text-red-500 transition' />
                  )}
                </ListItemButton>
              </ListItem>

              {/* Subcategories */}
              {expandedCategory === item.name && item.sub && (
                <List component="div" disablePadding>
                  {item.sub.map((subItem, subIndex) => (
                    <ListItem key={subIndex} disablePadding>
                      <ListItemButton className='pl-12 hover:bg-red-100 transition'>
                        <ListItemText
                          primary={subItem}
                          className='text-[13px] font-[400] text-gray-700'
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  )
}

export default CategoryPanel