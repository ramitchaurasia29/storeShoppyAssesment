import React, { useState } from "react";

import home from '../images/home.png';
import arrowTilt from '../images/arrow_tilt.png';
import account_statement from '../images/acoount_statement.png';
import contact from '../images/contact.png';
import loans from '../images/loans.png';
import vendor_payments from '../images/vendor payment.png';
import tax_payments from '../images/tax.png';
import Payout_link from '../images/link.png';
import payroll from '../images/payroll.png';
import request from '../images/reuest.png';
import whiteArrowDown from '../images/arrowwhite.png'
import blueArrow from '../images/arrowblue.png'
import razorlite from '../images/razorlite.png'





const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-auto">
            <div
                className={`${isOpen ? "w-64" : "w-16"
                    } bg-gray-800 h-screen text-white transition-width duration-300 overflow-hidden`}
            >
                <button
                    onClick={toggleSidebar}
                    className="p-4 text-xl focus:outline-none"
                >
                    ☰
                </button>
                <div className="p-4">
                    {isOpen && (
                        <>
                            <h1 className="text-2xl font-bold mb-4 flex items-center">
                                Razorpay
                                <img src={razorlite} className="h-8 w-8 ml-2" alt="Razorpay Lite" />
                            </h1>
                            <ul className="text-left">
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={home} alt="Home" className="w-6 h-6 mr-2" />
                                    <span>Home</span>
                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={arrowTilt} alt="Payouts" className="w-6 h-6 mr-2" />
                                    <span>Payouts</span>
                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={account_statement} alt="Account Statement" className="w-6 h-6 mr-2" />
                                    <span>Account Statement</span>
                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={contact} alt="Contacts" className="w-6 h-6 mr-2" />
                                    <span>Contacts</span>
                                </li>
                                <li>
                                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={loans} alt="Loans" className="w-6 h-6 mr-2" />
                                    <span>Loans<span className="bg-green-500 ml-1 px-2 py-0.5 text-xs rounded-lg">NEW</span></span>
                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <div>
                                        <div className="flex">
                                            <img src={vendor_payments} alt="Vendor Payments" className="w-6 h-6 mr-2" />
                                            <div>Vendor Payments</div></div>
                                        <div className="flex mt-0.5">
                                            <div><span className="bg-green-500 ml-1 px-2 py-0.5 text-xs rounded-lg">NEW </span></div>
                                            <div className="flex items-center">
                                                <span className="text-blue-500 font-medium">&nbsp;Invoice appraisals</span>
                                                <img src={blueArrow} className='h-3 w-3 ml-2' alt='' />
                                            </div>
                                        </div>
                                    </div>


                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={tax_payments} alt="Tax Payments" className="w-6 h-6 mr-2" />
                                    <span>Tax Payments</span>
                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={Payout_link} alt="Payout Links" className="w-6 h-6 mr-2" />
                                    <span>Payout Links</span>
                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={payroll} alt="Payroll" className="w-6 h-6 mr-2" />
                                    <span>Payroll</span>
                                </li>
                                <li className="flex items-center mb-2 p-2 rounded-md hover:bg-gray-600 hover:border-green-500 hover:border-l-4 transition-colors duration-300 text-sm">
                                    <img src={request} alt="Reports" className="w-6 h-6 mr-2" />
                                    <span>Reports</span>
                                </li>




                            </ul>
                        </>
                    )}
                </div>
            </div>
            <div className="flex-grow p-6">

            </div>
        </div>
    );
};

export default Sidebar;
