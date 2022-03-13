import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionsContext";

import useFetch from "../hooks/useFetch";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, id }) => {
    const gifUrl = useFetch({ keyword });

    return (
        <div className=" w-96 flex m-4 justify-center items-center h-auto form-gradient-bg flex-col p-3">
            <div className="flex justify-center items-center w-full flex-col">
                <div className="flex w-96 h-52 justify-center align-center">
                    <img className="w-full h-full" src={gifUrl} alt="gif" />
                </div>
                <div className="text-white flex justify-center flex-col items-start">
                    <h1>Transaction Number : </h1>
                    <h6>{id}</h6>
                    <h1>From : </h1>
                    <a className="hover:text-pink-400" href={`https://ropsten.etherscan.io/address/${addressFrom}`}><h6>{addressFrom}</h6></a>
                    <h1>To : </h1>
                    <a className="hover:text-pink-400" href={`https://ropsten.etherscan.io/address/${addressTo}`}><h6>{addressTo}</h6></a>
                    <h1>Message : </h1>
                    <h6>{message}</h6>
                    <h1>Amount : </h1>
                    <h6>{amount}</h6>
                    <h1>Time : </h1>
                    <h6>{timestamp}</h6>
                </div>
            </div>
        </div>
    );
};

const Transaction = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl sm:text-5xl text-center my-2">
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className="text-white text-3xl sm:text-5xl text-center my-2">
                        Connect your account to see the latest transactions
                    </h3>
                )}

                <div className="flex justify-evenly flex-wrap w-full flex-row">
                    {
                        transactions.map((t, i) => (

                            <TransactionsCard key={i} {...t} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Transaction