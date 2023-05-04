import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "./layout/Container";

const Register = () => {
  let [registerPart, setRegisterPart] = useState({});
  
  let [loader, setLoader] = useState(true)


  useEffect(() => {
    async function mregister() {
      let register = await axios.get("https://bwfc-api.vercel.app/payment");
      setRegisterPart(register.data);
      setLoader(false)
    }
    mregister();
  }, []);

  if(loader){
    return <p>Loading....</p>
  }

  return (
    <>
      <section className="mt-[120px]">
        <Container className="  ">
          <div className="flex bg-[#F3F7FA]  py-[75px] px-[60px] rounded-[20px] relative">
            <div className="w-1/2  sm:w-full">
              <h3 className="font-man font-extrabold text-lg text-primary uppercase">
                {registerPart.subTitle}
              </h3>
              <h2 className="font-man font-bold text-5xl text-black w-[580px] mt-6 ">
                {registerPart.title}
              </h2>
              <p className="font-man font-normal text-lg text-para w-[513px] mt-9 ">
                {registerPart.paragraph}
              </p>
            </div>
            <div className="w-1/2 ">
              <img alt="paymentShape"
                className="top-[-24px] right-[0] absolute"
                src={registerPart.paymentShape}
              />
              <div className="pl-[2px]">
                <h2 className="font-man font-bold text-2xl text-primary">
                  Get Started for Free
                </h2>
              </div>
              <div className="text-center">
                <div className="mt-[20px]">
                  <input
                    className="py-[17px] pl-[21px] w-[356px] rounded-md font-man font-normal text-xl text-para"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mt-[20px]">
                  <input
                    className="py-[17px] pl-[21px] w-[356px] rounded-md font-man font-normal text-xl text-para"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-[20px]">
                  <a className="inline-block w-[356px] py-[17px] rounded-md font-man font-bold text-base uppercase border border-solid border-secondary bg-secondary text-white hover:bg-transparent hover:text-secondary ease-in-out duration-300">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
