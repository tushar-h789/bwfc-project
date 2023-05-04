import React, { useEffect, useState } from 'react'
import Container from './layout/Container'
import axios from 'axios'

const Residence = () => {

  let [resiData, setResiData] = useState({})
  let [loader, setLoader] = useState(true)

  useEffect(()=>{
    async function residence(){
      const respons = await axios.get('https://bwfc-api.vercel.app/residence')
      setResiData(respons.data)
      setLoader(false)
      console.log(respons.data.button.text);
    }
    residence()
  },[])

  if(loader){
    return <p>Loading...</p>
  }

  return (
    <Container>
      <section className='flex py-10 px-7 mt-16 border border-[#DEE1E6] items-center '>
        <div className='w-3/4	'>
          <h3 className='font-man text-normal text-[22px] text-para'>{resiData.text}</h3>
        </div>
        
        <div className='w-1/4	'>
        <button className='bg-[#FF7F5C] py-4 px-16 rounded-full text-white ml-10'>{resiData.button.text}</button>
        </div>
      </section>
    </Container>
  )
}

export default Residence