import React, { useContext } from 'react'
import logo from "../logo.png";
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { TransactionContext } from '../context/TransactionsContext'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { connectWallet, currentAccount } = useContext(TransactionContext);
    const NavBarItem = ({ title, classProps }) => {
        return (
            <li className={`mx-4 cursor-pointer ${classProps}`}>
                {title}
            </li>
        )
    }
    return (
        <nav nav className='w-full flex justify-around items-center px-4' >
            <div className='flex-[0.5] justify-center items-center' >
                <img src={logo} alt="" className='w-28 cursor-pointer' />
            </div>
            <ul className='justify-center md:flex hidden items-center'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} classProps={`hover:text-white`} />
                ))}
                <li>
                    {
                        currentAccount ? (
                            <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 btn-grad p-3 rounded-full text-white text-xs">
                                {currentAccount}
                            </button>
                        ) : (
                            <button onClick={connectWallet} className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 btn-grad p-3 rounded-full text-white text-xs">
                                Connect Wallet
                            </button>
                        )
                    }

                </li>

            </ul>
            <div className="flex">
                {toggleMenu ? <AiOutlineClose className="cursor-pointer md:hidden" onClick={() => setToggleMenu(false)} />
                    : <HiMenu className=" flex-right cursor-pointer md:hidden text-2xl" onClick={() => setToggleMenu(true)} />}

                {toggleMenu && (
                    <ul className="w-2/4 h-screen absolute glassmorphism top-0 z-10 -right-2 ">
                        <li>
                            <AiOutlineClose className="cursor-pointer md:hidden text-2xl m-5" onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classProps={`text-white text-xl m-5 p-3`} />
                        ))}
                    </ul>
                )}
            </div>
        </nav >
    )
}

export default Navbar