import React, { useContext } from 'react'
import { Loader } from '.'
import { TransactionContext } from '../context/TransactionsContext'

function Form() {
    const { formData, sendTransaction, handleChange, isLoading, currentAccount } = useContext(TransactionContext)

    const handelSubmit = (e) => {
        const { address, amount, keyword, message } = formData;
        e.preventDefault();
        if (!address || !amount || !keyword || !message) return
        sendTransaction();
    }

    return (
        <>
            {
                currentAccount ? (
                    <div className="md:w-1/3 w-1/2 m-auto flex justify-center items-center h-auto form-gradient-bg bg-slate-900 flex-col p-3">
                        <input
                            placeholder="Address"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            autoComplete="off"
                            className="my-2 w-full rounded p-2 outline-none bg-transparent text-white border-none text-sm "
                        />
                        <input
                            placeholder="Amount"
                            type="number"
                            step="0.0001"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            autoComplete="off"
                            className="my-2 w-full rounded p-2 outline-none bg-transparent text-white border-none text-sm "
                        />
                        <input
                            placeholder="Keyword"
                            type="text"
                            name="keyword"
                            value={formData.keyword}
                            onChange={handleChange}
                            autoComplete="off"
                            className="my-2 w-full rounded p-2 outline-none bg-transparent text-white border-none text-sm "
                        />
                        <input
                            placeholder="Message"
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            autoComplete="off"
                            className="my-2 w-full rounded p-2 outline-none bg-transparent text-white border-none text-sm "
                        />

                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {
                            isLoading ? (
                                <Loader />
                            ) :
                                (
                                    <button onClick={handelSubmit} type="button" className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 text-white border-[1px] w-full p-2 my-2 rounded-full cursor-pointer">
                                        Send Now
                                    </button>
                                )
                        }
                    </div>
                ) : (
                    <div></div>
                )
            }

        </>
    )
}

export default Form