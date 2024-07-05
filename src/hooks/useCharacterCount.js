import { useEffect, useState } from "react"


export const useCharacterCount = (text = '') => {
    const[charCount, setCharCount]= useState(0)
    
        useEffect(() => {
            const characters = text.length
            setCharCount(characters)
        }, [text])
        return charCount

    
}

