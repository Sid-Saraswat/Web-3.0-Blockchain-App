import React, { useContext } from 'react'
import img from "../img/img.png";
import { TransactionContext } from '../context/TransactionsContext'
function Welcome() {
    const { connectWallet, currentAccount } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col justify-around md:p-20 py-12 px-4" >
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-left text-center justify-center sm:text-5xl py-1 text-white">
                        Send Crypto <br /> accross the world
                    </h1>
                    <p className='md:text-left text-center mt-5 text-white font-light md:w-full w-11/12 text-base' >
                        A easy way to send cryptocurrencies just on krypto.
                    </p>
                    {
                        currentAccount ? (
                            <div></div>
                        ) : (
                            <button type="button" onClick={connectWallet} className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 text-white rounded-full p-3 my-4 btn-grad ">
                                Connect Wallet
                            </button>
                        )
                    }
                </div>
                <img className="md:w-96 w-30 md:flex hidden ml-52" src={img} alt="img" />
            </div>
        </div>
    )
}

export default Welcome