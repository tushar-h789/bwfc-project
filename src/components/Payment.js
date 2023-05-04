import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container  from './layout/Container';

const Payment = () => {

  let [paymentData, setPaymentData] = useState({});
  let [loader, setLoader] = useState(true);

  useEffect(()=>{
    async function payment(){
      let payment = await axios.get("https://bwfc-api.vercel.app/account")
      setPaymentData(payment.data)
      setLoader(false)
    }
    payment();
  },[])

  if(loader){
    return <h2>loading</h2>
  }

  return (
    <section className='relative' style={{backgroundImage:`url('./../assets/Union.png')`}}>
      <Container>
      <div className='flex items-center mt-[106px]'>
        <div className='w-3/6'>
          <h4 className='font-man font-extrabold text-lg text-primary uppercase mb-[25px]'>{paymentData.subTitle}</h4>
          <h2 className='w-[520px] h-[168px] font-man font-bold text-5xl leading-[56px] mr-auto'>{paymentData.title}</h2>
          <p className='my-[26px] font-man font-normal text-[18px] leading-[26px] text-para'>{paymentData.paragraph}</p>
          <div className="inline-block py-[15px] px-[35px] bg-primary font-man font-bold text-[16px] leading-[30px] text-white border-2 border-transparent transition liner duration-700 rounded-md hover:bg-transparent hover:text-primary hover:border-2  hover:border-primary cursor-pointer">
            <a href={paymentData.button.link} className=''>{paymentData.button.text}</a>
           </div>
        </div>
        <div className='w-3/6'>
          <img className='' src={paymentData.accountImage} alt='accountImage'/>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Payment