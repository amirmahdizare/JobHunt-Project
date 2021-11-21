import React, { useState } from 'react'

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false)

    const toggleLoading = () => setIsLoading((prev) => !prev)
    return { isLoading, toggleLoading }
}

export default useLoading
