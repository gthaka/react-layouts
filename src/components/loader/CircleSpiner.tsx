import React from 'react'
import CircleLoader from './CircleLoader'

interface ICircleSpinnerProps {
    displayText?: string
}

const CircleSpinner = (props: ICircleSpinnerProps) => {
    return (
        <div className="flex items-center justify-center">
            <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled>
                <CircleLoader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />      Processing...
            </button>
        </div>
    )
}

export default CircleSpinner