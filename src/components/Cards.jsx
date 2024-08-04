import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Cards({ data}) {
  return (
    <motion.div drag  className='relative flex-shrink-0 w-60 h-72 rounded-[40px] text-white bg-sky-700 px-8 py-10 overflow-hidden'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-2'>
                <h5>{data.filesize}</h5>
                <span className='flex items-center w-8 h-8 rounded-full'>
                    {data.close ? <IoIosCloseCircleOutline /> : <FaDownload color='#fff' size=".9em"/>}
                
                </span>
                
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-zinc-600" : "bg-green-500"} text-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                    ) 
            }
            
        
        </div>
    </motion.div>
  )
}

export default Cards