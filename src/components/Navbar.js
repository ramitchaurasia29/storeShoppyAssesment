import React from 'react'
import account from '../images/account blue.png'
import notification from '../images/notification.png';
import search from '../images/search.png'
import downArrow from '../images/down-arrow.png'
import add from '../images/add.png'
import shortDownArrow from '../images/shortDownArrow.png'

const Navbar = () => {
    return (
        <div className='text-white flex justify-end w-full'>
            <button
                type="button"
                className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-2"
            >
                <img src={add} alt="" className="h-4 w-4" />
                <span>PAYOUT</span>
                <img src={shortDownArrow} alt="" className="h-4 w-4" />
            </button>

            <img src={search} alt='' className='mx-2 h-8' />
            <img src={notification} alt='' className='mx-2 h-8' />
            <img src={account} alt='' className='mx-2 h-8' />
            </div>
    )
}

export default Navbar