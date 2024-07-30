import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../index.css'
import razorlite from '../images/razorlite.png'
import reload from '../images/refresh-button.png'
import whiteArrow from '../images/arrowwhite.png'
import blueArrow from '../images/arrowblue.png'
import info from '../images/info.png'
import downArrow from '../images/down-arrow.png'
import user from '../images/account.png'
import whiteArrowDown from '../images/arrowwhite.png'
import rupee from '../images/rupee.png'
import completed from '../images/completed.png'
import Sidebar from './Sidebar';
import Navbar from './Navbar';



const Dashboard = () => {
    return (
        <>

            <Sidebar />

            <div className='flex justify-center flex-col items-center p-4 flex-grow'>

                
                <Navbar/>
                <div className="flex flex-col md:flex-row mb-8 text-left w-full md:w-7/12 ">
                    <div className="flex flex-col">
                        <div className="text-white flex items-center mb-2">
                            <img src={razorlite} alt="RazorpayX Lite" className="w-6 h-6" />
                            <span className="mr-1 text-gray-300">RazorpayX Lite</span>
                            <span className="text-gray-500"> as of a few seconds ago</span>
                            <img src={reload} alt="Reload" className="h-6 w-6 mx-1" />
                        </div>
                        <div className="text-white font-medium text-3xl">
                            <div className="flex items-end">
                                <img src={rupee} alt='' className="h-8 w-8" />
                                <span className="font-bold text-white">100</span>
                                <span className="text-xl text-gray-400 font-medium">.09</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:w-px bg-gray-500 opacity-100 dark:opacity-50 mx-4"></div>
                    <div className="text-blue-500 pt-4 pl-3 font-medium">
                        + Add balance
                    </div>
                </div>


                <div className='w-7/12 border-gray-500 border-2 rounded-lg p-3 border-dashed text-left mb-6'>
                    <p className='text-gray-500'>🎉You'are all caught up. There are no more items pending on you.</p>
                </div>

                <div className=' mb-4 text-white w-full flex max-w-screen-lg pl-10  justify-start' >Onboarding updates<span className='text-gray-500'>(1)</span></div>
                {/* open account part  */}
                <div className="bg-gray-900 text-white p-4 shadow-md  max-w-screen-lg flex flex-col md:flex-row mb-6 rounded-lg">
                    <div className='flex items-center pr-6'>Curent account</div>
                    <div className='text-left'>
                        <div className='text-2xl font-bold'>Open Your RazorpayX Account.</div>
                        <div className='text-slate-500  mt-1 mb-2'>Don't let bankache come in the way of your growth. Apply for your Razorpayx account with a few basic details</div>

                        <div className='flex justify-between w-full '>
                            <div class=" bg-gray-200 rounded-full w-1/5 h-1.5 dark:bg-gray-700 mt-1">
                                <div className="bg-green-400 h-1.5 rounded-full w-3/4"  ></div>
                            </div>
                            <div class=" bg-gray-200 rounded-full w-1/5 h-1.5 dark:bg-gray-700 mt-1">
                            </div>
                            <div class=" bg-gray-200 rounded-full w-1/5 h-1.5 dark:bg-gray-700 mt-1">
                            </div>
                            <div class=" bg-gray-200 rounded-full w-1/5 h-1.5 dark:bg-gray-700 mt-1">
                            </div>

                        </div>
                        <div className='w-full text-slate-500'>
                            <p className='text-right mt-0.5'>0/4</p>
                        </div>


                        <button
                            type="button"
                            style={{ transform: 'translateY(-15px)' }}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-2"
                        >
                            Start Application
                            <span>
                                <img src={whiteArrow} className='w-3 h-3 ml-2' alt="Arrow" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* 2columns part  */}

                <div className="bg-gray-900 text-white p-4 shadow-md  max-w-screen-lg flex flex-col md:flex-row border-green-400 border-t-2">
                    <div className='px-3.5 text-left md:mr-10 md:pr-16 text-2xl font-bold md:max-w-xs mr-12 '>
                        Amazon Instant Settlements
                    </div>
                    <div className='text-left flex-1'>
                        <div className='flex items-center mb-2'>
                            <input type="radio" name="fruit" value="elderberry" className="mr-2" />
                            <span>Let's get started</span>
                        </div>
                        <p className='ml-4 mb-4'>
                            Complete your application and get instant access to your Amazon Payouts
                        </p>
                        <button type="button" className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Apply now
                        </button>
                    </div>
                </div>
                <div className="bg-gray-900 text-white p-4 shadow-md max-w-7xl mx-auto flex flex-col md:flex-row border-green-400 border-t-2 pr-20">
                    <div className='px-4 text-left md:mr-12 md:pr-16 text-2xl font-bold md:max-w-xs'>
                        Creating Payouts in Live mode
                    </div>
                    <div className='text-left flex-1'>
                        <div className='flex items-center mb-2'>
                            <img src={completed} alt='' className='h-4 w-4 mr-2' />
                            <span className='text-gray-500'><strong>Add balance</strong> to create Payout in Live mode</span>
                        </div>
                        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className='flex items-center mb-2'>
                            <input type="radio" name="fruit" value="elderberry" className="mr-2" />
                            <span>Create Payout</span>
                        </div>
                        <p className='ml-4 mb-4 text-gray-500'>
                            There are multiple ways in which you can create the first payout.
                        </p>
                        <div className='flex flex-wrap gap-2 '>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                MAKE A PAYOUT
                            </button>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                SHOW APPS FOR ME
                            </button>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                API PAYOUTS
                            </button>
                        </div>
                    </div>
                </div>

                {/* ***************************************second image  ********************************* */}
                <div className="mt-6 w-full max-w-5xl mx-auto p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-white">Insights</div>
                        <div className="flex items-center text-blue-500">
                            Detailed Insights
                            <img src={blueArrow} alt="Detailed Insights Arrow" className="h-4 w-4 ml-2" />
                        </div>
                    </div>
                    <div className="bg-gray-900 w-full p-4 flex flex-col items-start">
                        <div className="text-gray-500">Payout volume - last 30 days</div>
                        <div className="text-white font-medium text-2xl">
                            236,695<span className="text-gray-500 text-sm">.00</span>
                        </div>

                        <Sparklines data={[0, 10, 0, 0, 0, 0]} height={20}>
                            <SparklinesLine color="blue" />
                        </Sparklines>

                    </div>

                </div>
                <div className="mt-6 w-full max-w-5xl mx-auto p-4 ">
                    <div className="bg-gray-900 w-full p-4 flex flex-col">
                        <div className="flex justify-between items-center">
                            <div className="text-white font-medium flex text-center">
                                Activity Feed
                                <span className="flex items-center ml-2 text-gray-500">
                                    <img src={info} alt="" className="w-4 h-4 mr-1" />
                                    updated a few seconds ago
                                </span>
                            </div>
                            <div className="flex items-center text-blue-500">
                                Show filters
                                <img src={downArrow} alt="" className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                        <div className='flex justify-center flex-col items-center'>
                            <div className='text-white w-full md:w-3/4 bg-gray-500 flex flex-col md:flex-row p-4 md:p-5 mt-8 md:mt-16 rounded-lg gradient-col'>
                                {/* Date Section */}
                                <div className='py-2 md:py-4 px-4 md:px-16 flex-shrink-0 text-center md:text-left'>
                                    <div className='font-bold text-sm md:text-lg'>
                                        23 JUL
                                    </div>
                                    <div className='text-gray-400 text-xs md:text-sm'>Tuesday</div>
                                </div>

                                {/* Vertical Line Divider */}
                                <div className='hidden md:flex md:w-px bg-green-500 opacity-100 dark:opacity-50 mx-4 h-16'></div>

                                {/* Activity Section */}
                                <div className='flex items-center px-4 md:px-12'>
                                    <img src={user} alt='' className='w-4 h-4 md:w-5 md:h-5' />
                                    <span className='ml-2 text-xs md:text-sm text-gray-400'>
                                        <span className='font-bold text-white'>1</span>&nbsp;contact created
                                    </span>
                                </div>
                            </div>

                            {/* col2 */}
                            <div className='text-white w-full md:w-3/4 bg-gray-500 flex flex-col md:flex-row p-4 md:p-5 mt-8 md:mt-16 rounded-lg gradient-col'>
                                {/* Date Section */}
                                <div className='py-2 md:py-4 px-4 md:px-16 flex-shrink-0'>
                                    <div className='font-bold text-sm md:text-base'>
                                        9 JUL
                                    </div>
                                    <div className='text-gray-400 text-xs md:text-sm'>Tuesday</div>
                                </div>

                                {/* Vertical Line Divider */}
                                <div className='hidden md:flex md:w-px bg-green-500 opacity-100 dark:opacity-50 mx-4 h-16'></div>

                                {/* Activity Section */}
                                <div className='flex items-center px-4 md:px-12'>
                                    <img src={razorlite} alt='' className='w-6 h-6 md:w-8 md:h-8' />
                                    <span className='ml-2 text-xs md:text-sm text-gray-400 flex items-center'>
                                        <span className='font-bold text-white flex items-center'>
                                            <img src={rupee} alt='' className='inline h-3 w-3 md:h-4 md:w-4' />300
                                        </span>
                                        <span className='text-xs md:text-sm'>.00</span>&nbsp;credited into the account
                                    </span>
                                </div>
                            </div>

                            {/* col3 */}
                            <div className='text-white w-full md:w-3/4 bg-gray-500 flex flex-col md:flex-row p-4 md:p-5 mt-8 md:mt-16 rounded-lg gradient-col'>
                                {/* Date Section */}
                                <div className='py-2 md:py-4 px-4 md:px-16 flex-shrink-0'>
                                    <div className='font-bold text-sm md:text-base'>
                                        1 JUL
                                    </div>
                                    <div className='text-gray-400 text-xs md:text-sm'>Monday</div>
                                </div>

                                {/* Vertical Line Divider */}
                                <div className='hidden md:flex md:w-px bg-green-500 opacity-100 dark:opacity-50 mx-4 h-16'></div>

                                {/* Activity Section */}
                                <div className='flex items-center px-4 md:px-12'>
                                    <img src={razorlite} alt='' className='w-6 h-6 md:w-8 md:h-8' />
                                    <span className='ml-2 text-xs md:text-sm text-gray-400 flex items-center'>
                                        <span className='font-bold text-white'>
                                            1
                                        </span>&nbsp;payout worth&nbsp;
                                        <span className='font-bold text-white flex items-center'>
                                            <img src={rupee} alt='' className='inline h-3 w-3 md:h-4 md:w-4' />2,36,695
                                        </span>
                                        <span className='text-xs md:text-sm'>.00</span>&nbsp;created
                                    </span>
                                </div>
                            </div>

                            {/* col4 */}
                            <div className='text-white w-full md:w-3/4 bg-gray-500 flex flex-col md:flex-row p-4 md:p-5 mt-8 md:mt-16 rounded-lg gradient-col'>
                                {/* Date Section */}
                                <div className='py-2 md:py-4 px-4 md:px-16 flex-shrink-0'>
                                    <div className='font-bold text-sm md:text-base'>
                                        24 JUN
                                    </div>
                                    <div className='text-gray-400 text-xs md:text-sm'>Monday</div>
                                </div>

                                {/* Vertical Line Divider */}
                                <div className='hidden md:flex md:w-px bg-green-500 opacity-100 dark:opacity-50 mx-4 h-16'></div>

                                {/* Activity Section */}
                                <div className='flex items-center px-4 md:px-12'>
                                    <img src={razorlite} alt='' className='w-6 h-6 md:w-8 md:h-8' />
                                    <span className='ml-2 text-xs md:text-sm text-gray-400 flex items-center'>
                                        <span className='font-bold text-white'></span>
                                    </span>
                                </div>
                            </div>

                            <button type="button" className="flex items-center mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                LOOK FOR OLDER ACTIVITES
                                <img src={whiteArrowDown} className='h-3 w-3 ml-2 transform rotate-90' alt='' />
                            </button>


                        </div>


                    </div>



                </div>


            </div>
        </>
    )
}

export default Dashboard
