import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5'; 
import styles from './Popupmenu.module.css'; 
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { MdSmartButton } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiDownloadOutline } from "react-icons/ti";
import { CiPercent } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";


const PopupMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <IoMenu size={24} />
            </button>
            {isOpen && (
                <div className={styles.popupMenu}>
                    <div className={styles.popupMenuContent}>
                        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                            <RxCross1 size={24} />
                        </button>
                        <h2>PAYMENTS</h2>
                        <ul>
                            <li><HiOutlineDesktopComputer/>Payment Gateway</li>
                            <li><TbArrowsDoubleNeSw/>Payment Links</li>
                            <li><MdSmartButton/>Payment Buttons</li>
                           
                        </ul>
                        <p>Explore Payment Suite<MdOutlineKeyboardArrowRight /></p>
                         <div className={styles.container}>
                        <h3>Not sure which product to choose?</h3>
                       
                        <button className={styles.btn}>Find me a product<BsBoxArrowUpRight style={{marginLeft:"10px"}}/></button>
                        </div>
                        <h2 className={styles.suite}>RAZORPAY X-BANKING SUITE</h2>
                        <ul>
                            <li><CiBank/>Current Accounts</li>
                            <li><IoNewspaperOutline/> Vendor Payments</li>
                            <li><TiDownloadOutline/>Payroll</li>
                            
                        </ul>
                        <h5>Explore Banking Suite</h5>
                        <ul>
                            <li><CiPercent/>Pricing</li>
                            <li><MdOutlineMenuBook/>Resources</li>
                            <li><IoPeopleOutline/>Partners</li>
                            <li><BiSupport/>Support</li>
                        </ul>
                        <button className={styles.loginButton}>Login</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupMenu;
