import React from 'react'

function Loader() {
    return (
        <div className="flex justify-center items-center py-2">
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-purple-700" />
        </div>
    )
}

export default Loader