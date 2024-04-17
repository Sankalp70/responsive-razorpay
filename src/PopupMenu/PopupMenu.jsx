import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5'; // Import close and menu icons from react-icons
import styles from './Popupmenu.module.css'; // Assuming styles are in PopupMenu.module.css
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { MdSmartButton } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";

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
                        <button className={styles.closeButton} onClick={() => setIsOpen(true)}>
                            <RxCross1 size={24} />
                        </button>
                        <h2>PAYMENTS</h2>
                        <ul>
                            <li><HiOutlineDesktopComputer/>Payment Gateway</li>
                            <li><TbArrowsDoubleNeSw/>Payment Links</li>
                            <li><MdSmartButton/>Payment Buttons</li>
                           
                        </ul>
                        <p>Explore Payment Suite<MdOutlineKeyboardArrowRight /></p>
                        <h3>Not sure which product to choose?</h3>
                        <button className={styles.btn}>Find me a product<BsBoxArrowUpRight style={{marginLeft:"10px"}}/></button>
                        <h2>RAZORPAY X-BANKING SUITE</h2>
                        <ul>
                            <li>Current Accounts</li>
                            <li>Vendor Payments</li>
                            <li>Payroll</li>
                            
                        </ul>
                        <h5>Explore Banking Suite</h5>
                        <ul>
                            <li>Pricing</li>
                            <li>Resources</li>
                            <li>Partners</li>
                            <li>Support</li>
                        </ul>
                        <button className={styles.loginButton}>Login</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupMenu;
