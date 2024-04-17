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
import { MdKeyboardArrowRight } from "react-icons/md";

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
                            <RxCross1 size={24} style={{color:"black"}} />
                        </button>
                        <h2>PAYMENTS</h2>
                        <ul>
                            <li><HiOutlineDesktopComputer className={styles.icon}/>Payment Gateway</li>
                            <li><TbArrowsDoubleNeSw className={styles.icon}/>Payment Links</li>
                            <li><MdSmartButton className={styles.icon}/>Payment Buttons</li>
                           
                        </ul>
                        <p>Explore Payment Suite<MdOutlineKeyboardArrowRight /></p>
                        <hr className={styles.line}/>
                         <div className={styles.container}>
                        <h3>Not sure which product to choose?</h3>
                       
                        <button className={styles.btn}>Find me a product<BsBoxArrowUpRight style={{marginLeft:"10px"}}/></button>
                        </div>
                        <h2 className={styles.suite}>RAZORPAY X-BANKING SUITE</h2>
                        <ul>
                            <li><CiBank className={styles.icon}/>Current Accounts</li>
                            <li><IoNewspaperOutline className={styles.icon}/> Vendor Payments</li>
                            <li><TiDownloadOutline className={styles.icon}/>Payroll</li>
                            
                        </ul>
                        <h5>Explore Banking Suite<MdKeyboardArrowRight/></h5>
                        <hr className={styles.line}/>
                        <ul className={styles.feat}>
                            <li><CiPercent className={styles.icon} style={{backgroundColor:"#f8efba", color:"#e47615"}}/>Pricing<MdKeyboardArrowRight/></li>
                            <li><MdOutlineMenuBook className={styles.icon}/>Resources<MdKeyboardArrowRight/></li>
                            <li><IoPeopleOutline className={styles.icon}/>Partners<MdKeyboardArrowRight/></li>
                            <li><BiSupport className={styles.icon}/>Support<MdKeyboardArrowRight/></li>
                        </ul>
                        <button className={styles.loginButton}>Log In</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupMenu;
