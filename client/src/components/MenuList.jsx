import React, { Fragment } from 'react';
import {Menu,Transition} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../redux/userSlice';
const MenuList = ({user,onClick}) => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const handleLogOut=()=>{ 
    dispatch(Logout());   
    navigate("/find-oppurtunities");
   }

  return (
    <div>
        <Menu as="div" className="inline-block text-left">
            <div className='flex'>
              <Menu.Button className="inline-flex gap-2 w-full rounded-md bg-dutch_white md:px-4 py-2 text-sm font-medium text-burnt_seinna hover:bg-opacity-20">
                <div className="hidden lg:leading[80px] lg:flex flex-col items-end">
                  {console.log(user.name)}
                    <p className="text-sm font-semibold">
                    </p>
                    <span className="text-sm text-persian_orange">
                        {user?.jobTitle ?? user?.email}
                    </span>

                </div>
                {  console.log("khhhh",localStorage.userInfo)
}
                {console.log("ppppppp",user,user.profileUrl)}
                
                
                <img src={user?.profileUrl??<CgProfile />} alt='profile' className='w-10 h-10 rounded-full object-cover'/>

                <BiChevronDown
              className='h-8 w-8 text-slate-600'
              aria-hidden='true'
                />

              </Menu.Button>
            </div>

            <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
            >
            
            <Menu.Items className="absolute z-50 right-2 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                <div className='p-1'>
                <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`${
                      user?.accountType ? "user-profile" : "company-profile"
                    }`}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md p-2 text-sm`}
                    onClick={onClick}
                  >
                    <CgProfile
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden='true'
                    />
                    {user?.accountType ? "User Profile" : "Company Profile"}
                  </Link>
                )}
              </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleLogOut()}

                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <AiOutlineLogout
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden='true'
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>

        </Menu>
    </div>
  )
  

}

export default MenuList;