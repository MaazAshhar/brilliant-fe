import React from 'react'
import Button from '../Shared/Button'

const Community = () => {
  return (
    <div>
        <div className="container py-10 sm:py-20">
            <div className="flex flex-col sm:flex-row items-center gap-y-6">
                <div className="w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Join over 10 million people learning on Brilliant</h1>
                </div>
                <div className="w-full flex justify-center">
                    <Button text="Get Started" textColor="text-white" bgColor="bg-green-700" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community