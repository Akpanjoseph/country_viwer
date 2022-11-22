import React from 'react';
import { FiMoon } from 'react-icons/fi'

const Header = () => {



    return (
        <div className=' shadow-md'>

            <div className='py-8 flex justify-between container mx-auto'>
                <p className='text-2xl font-bold'>where in the world</p>

               <div className='flex space-x-4'>
               <FiMoon size={20} />
               <p > Dark Mood</p>
               </div>
            </div>
        </div>
    );
}

export default Header;
