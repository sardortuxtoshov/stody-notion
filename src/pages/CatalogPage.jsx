import React from 'react'

function CatalogPage() {
  return (
    <>
        <div className='box-content bg-richblack-800 px-4'>
            <div className='mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent'>
                <p className='text-sm text-richblack-300'>
                    {`${<a href='/'>Home</a>}} / Catalog / `}
                    <span className='text-yellow-25'>
                        {'Backend'}
                    </span>
                </p>
            </div>
        </div>
    </>
  )
}

export default CatalogPage