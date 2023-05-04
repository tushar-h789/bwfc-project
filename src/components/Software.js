
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from './layout/Container'

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
    <Container>
      <div className='max-w-container mx-auto mt-[71px]'>
      <div className='flex justify-center mt-[72px]'>
        <h3 className='font-man font-regular text-base'>{sData.title}</h3>
      </div>

      <div className='flex justify-center mt-9 gap-14'>
        {sData.logos.map((item, index)=>(
          <img key={index} src={item.src}/>
        ))}
      </div>
    </div>
    </Container>

  )
}

export default Software