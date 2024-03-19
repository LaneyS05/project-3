import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

//Navbutton hide/show
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            {icon}
        </button>
    </TooltipComponent>
);
const Navbar = () => {
    const { activeMenu, setActiveMenu, handleClick, isclicked, setScreenSize, screenSize, currentColor } = useStateContext();

    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            {/* Menu Button */}
            <NavButton title='Menu' customFunc={() =>
                setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />
            <div className='flex'>
                {/* Cart button */}
                <NavButton title='Cart' customFunc={() => handleClick('cart')}
                    color="blue" icon={<FiShoppingCart />} />
            </div>
        </div>
    )
}

export default Navbar