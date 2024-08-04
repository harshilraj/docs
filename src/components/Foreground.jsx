import React from 'react';
import Cards from './Cards';

function Foreground() {

  
  const data = [
    {
      desc: "Hey, this is harshil raj",
      filesize: "1mb",
      close: false,
      tag:{ isOpen: true, tagTitle:"Download Now",tagColor:"green" },

    },
    {
      desc: "Hey, this is harshil raj",
      filesize: "1mb",
      close: true,
      tag:{ isOpen: true, tagTitle:"Download Now",tagColor:"blue" },

    },
    {
      desc: "Hey, this is harshil raj",
      filesize: "0.9mb",
      close: false,
      tag:{ isOpen: true, tagTitle:"Download Now",tagColor:"green" },

    }
  ]
  return (
    <>
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-6'>
          {data.map((item, index)=>(
            <Cards data={item} />
          ))};

        
        </div>
    
    </>
  )
}
export default Foreground