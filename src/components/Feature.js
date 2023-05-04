import React from 'react'
import { useState, useEffect } from 'react';
import Container from './layout/Container';
import axios from 'axios';

const Feature = () => {

  let [featureData, setFeatureData] = useState({});
  let [loader, setLoader] = useState(true);

  useEffect(()=>{
    async function feature(){
      let feature = await axios.get("https://bwfc-api.vercel.app/feature");
      setFeatureData(feature.data)
      setLoader(false)
    }
    feature()
  },[])

  if(loader){
    return <h2>loading</h2>
  }

  return (
    <section style={{backgroundImage:`url('${featureData.featureShape})`}}>
    
      <Container>
        <div className="flex mt-24">
            <div className="w-2/4">
              <img className='h-[452px]' src={featureData.featureImage} alt='featureImage' />
            </div>
            <div className="w-2/4">
              <h4 className='font-man font-extrabold text-lg text-primary uppercase mb-[25px]'>{featureData.subTitle}</h4>
              <h2 className=' font-man font-bold text-[50px] leading-[56px] mr-auto'>{featureData.title}</h2>
              <p className='pr-[103px] mt-[36px] mb-[27px] font-man font-normal text-[18px] leading-[26px] text-para'>{featureData.paragraph}</p>
              <div className="inline-block py-[15px] px-[35px] bg-primary font-man font-bold text-[16px] leading-[30px] text-white border-2 border-transparent transition liner duration-700 rounded-md hover:bg-transparent hover:text-primary hover:border-2  hover:border-primary cursor-pointer">
                  <a href={featureData.button.link}>{featureData.button.text}</a>
                  
              </div>
            </div>
        </div>
      </Container>
   </section>
  )
}

export default Feature