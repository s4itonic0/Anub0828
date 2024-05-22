import React from 'react'

const Videos = () => {
  return (
    <div className='bg-white duration-200 relative z-10'>
      <div className='py-5'>
        <div className=''>
          <div className='container flex justify-center items-center'>
            <div className='flex items-center gap-4 mt-10'>
              <h1 className='text-primary font-bold tracking-widest text-3xl uppercase sm:text-3xl'>Must-Watch</h1>
            </div>
          </div>
          <div class="aspect-video flex items-center justify-center">
    <iframe
      class="mt-5 w-[1000px] h-[600px]"
      src="https://youtube.com/embed/yq4GUYGtQyk"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
