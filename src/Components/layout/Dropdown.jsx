import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

import { ChevronUp } from '@/assets/icons';


const DropDown = ({color}) => {
  const links = [
    { href: '/car-shipping', label: 'Car Shipping' },
    { href: '/car-shipping-cost', label: 'Car Shipping Cost' },
    { href: '/motorcycle-shipping', label: 'Motorcycle Shipping' },
    { href: '/heavy-equipments', label: 'Heavy Equipment' },
    { href: '/open-transport', label: 'Open Transport' },
    { href: '/enclosed-vehicle-shipping', label: 'Enclosed Transport' },
    { href: '/door-to-door', label: 'Door to Door' },
    { href: '/expedited-car-shipping', label: 'Expedited Car Shipping' }
  ];
  return (
    <div>
      <Menu as="div" className="relative z-50 inline-block text-left">
        <div>
          <Menu.Button className={`inline-flex w-full items-center gap-1 justify-center rounded-md  px-2 text-xs lg:text-sm font-bold ${color || 'text-white'} hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
            SERVICES <ChevronUp strokeWidth={2.5} className="w-4" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {links.map((_i, index) => {
                return (
                  <Menu.Item className="hover:bg-gray-50" key={index}> 
                    <Link
                    href={_i.href}
                      className="group flex w-full items-center rounded-md px-2 text-gray-900 py-2 text-sm"
                    >
                      {_i.label}
                    </Link>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropDown;
