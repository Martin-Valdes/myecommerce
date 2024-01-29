import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import "./NavBar.scss"

const navigation = [


    { name: 'Componentes', href: 'categoria/componentes', current: true },
    { name: 'Fuentes', href: 'categoria/fuentes', current: false },
    { name: 'Medicion', href: 'categoria/medicion', current: false },
    { name: 'Soldadores', href: 'categoria/soldadores', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const NavBar = () => {
    return(
        <Disclosure as="nav" className="bg-gray-800 nav768 navNav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 navBar">
          
          <Link to="/"><img className="imgLogo" src="../img/logo2.png" alt="logo de empresa"/></Link>
          <Link to="/"><img className="imgLogo768" src="../img/logo768.png" alt="logo de empresa"/></Link>
            <div className="relative logoHamb flex h-16 items-center right-3 justify-between">
              <div className="absolute logohambColapse inset-y-0 left-0  flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">  
                <Menu as="div" className="relative ml-3">
                  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div> 
            <CartWidget/>
          </div>
           
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
    
    )
}

export default NavBar
