import React from 'react'

const WordCounter = () => {
  return (
    <div className='py-18 sm:py-10 sm:px-28 sm:my-20 bg-sectionBg-light rounded-lg'>
        <div className='flex gap-5 py-10'>
        <h4 className='font-bold text-2xl'>WORDS: 249</h4>
        <h4 className='font-bold text-2xl'>CHARACTERS: 300</h4>
        </div>
    <label for="wordCounter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Word Counter</label>
    <textarea id="wordCounter" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Write your thoughts here..."></textarea>
    </div>
  )
}

export default WordCounter