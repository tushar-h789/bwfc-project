import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Software = () => {

  let [sData, setSData] = useState({})
  let [loader, setLoader] = useState(true)

  useEffect(()=>{
    async function Software(){
      let SoftwareData = await axios.get('https://bwfc-api.vercel.app/sponsor')
      setSData(SoftwareData.data);
      setLoader(false)
    }
    Software()
  },[])

  if(loader){
    return <h1>Wait ...</h1>
  }

  return (
    <div className='max-w-container mx-auto'>
      <div className='flex justify-center mt-[72px]'>
        <h3 className='font-man font-regular text-base'>{sData.title}</h3>
      </div>

      <div className='flex justify-center mt-10 gap-14'>
        {sData.logos.map((item)=>(
          <img src={item.src}/>
        ))}
      </div>
    </div>
  )
}

export default Software