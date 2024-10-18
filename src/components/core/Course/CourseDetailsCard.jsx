import React from 'react'
import Img from '../../common/Img'
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from 'react-icons/fa';

function CourseDetailsCard({ course, setConfirmationModal}) {

  return (
    <>
        <div className={`flex flex-col gap-4 rounded-2xl bg-richblack-700 p-4 text-richblack-5`}>
            <Img 
                src={course.thumbnail}
                className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover max-w-full"
            />

            <div className='px-4'>
                <div className='space-x-3 pb-4 text-3xl font-semibold'>
                    $ {course.price}
                </div>
                <div className='flex flex-col gap-4'>
                    <button className='yellowButton outline-none'>
                        Buy Now
                    </button>
                    <button className='blackButton outline-none'>
                        Add to Cart
                    </button>
                </div>

                <p className='pb-3 pt-6 text-center text-sm text-richblack-25'>
                    30-Day Money-Back Guarantee 
                </p>

                <div>
                    <p className={`my-2 text-xl font-semibold`}>
                        Course Requirement :
                    </p>
                    <div className='flex flex-col gap-3 text-sm text-caribbeangreen-100'>
                        {course?.instructions?.map((item, i) => {
                            return (
                                <p className={`flex gap-2`} key={i}>
                                    <BsFillCaretRightFill />
                                    <span>{item}</span>
                                </p>
                            )
                        })}
                    </div>
                </div>

                <div className='text-center'>
                    <button
                        className='mx-auto flex items-center gap-2 py-6 text-yellow-100'
                    >
                        <FaShareSquare size={15} /> Share
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CourseDetailsCard