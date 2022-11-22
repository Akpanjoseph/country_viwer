import React,{useState} from 'react';
import { CiSearch } from 'react-icons/ci'
import { TbCaretDown } from 'react-icons/tb'
const SearchbarSection = () => {

    const [showFilter,setShowFilter] = useState(false)

    if(showFilter == true){
       let show = document.getElementById('show')
        show.classList += 'block'
    }

    return (
        <div className='mx-auto container flex justify-between bg-Very_Light_Gray'>

            <div className='shadow-lg mt-[10%] w-[30%] border py-2  flex space-x-3 px-8 '>
                <CiSearch size={20} />
                <input className='outline-none w-full' type="text" placeholder='Search for a country..' />
            </div>


            <div className=' mt-[10%] '>

                <div className='shadow-lg  py-2  px-2 flex space-x-3 rounded-md '>
                    <p >Filter by Region</p>
                    <TbCaretDown size={20} onClick={()=> setShowFilter(true)} id='caretdown' />
                </div>

                <div className='absolute shadow-md w-[11%] rounded-md  py-4 mt-2 hidden' id='show'>
                    <p className='hover:bg-slate-100 px-4' >Africa</p>
                    <p className='hover:bg-slate-100 px-4 py-2' >America</p>
                    <p className='hover:bg-slate-100 px-4 py-2' >Asia</p>
                    <p className='hover:bg-slate-100 px-4 py-2' >Europe</p>
                    <p className='hover:bg-slate-100 px-4 py-2' >Oceania</p>
                </div>
            </div>
        </div>
    );
}

export default SearchbarSection;
