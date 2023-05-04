import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import Container from "./layout/Container";

const Banner = () => {
  let [bannerPart, setBannerPart] = useState({});

  useEffect(() => {
    async function mbanner() {
      let banner = await axios.get("https://bwfc-api.vercel.app/banner");
      setBannerPart(banner.data);
    }
    mbanner();
  }, []);

  return (
    <>
      <section
        className="h-[500px] bg-no-repeat	 bg-center bg-cover"
        style={{ backgroundImage: `url(${bannerPart.bannerbgshape})` }}
      >
        <Container>
          <div className="flex mt-[78px]">
            <div className="w-1/2  mt-[68px]">
              <h1 className="font-man font-extrabold text-6xl text-black">
                {bannerPart.bannerheading}
              </h1>
              <p className="font-man font-normal text-xl w-[467px] mt-5">
                {bannerPart.bannerparagraph}
              </p>
              <div className="flex">
                <div className="">
                  {bannerPart.bannerButton && (
                    <a
                      className="bg-primary relative ease-in-out duration-300 z-999999999  mt-6 inline-block font-man font-bold text-base text-white py-[17px] px-[35px] rounded-full border border-solid border-primary hover:bg-transparent hover:text-primary"
                      href=""
                    >
                      {bannerPart.bannerButton.text}
                    </a>
                  )}
                </div>
                <div className="flex ">
                  {bannerPart.bannerButton && (
                    <a
                      className="w-[60px] z-999999999 h-[60px] bg-[#22D497] rounded-full	flex items-center	mt-6 ml-12"
                      href={bannerPart.video.link}
                    >
                      <BsPlayFill className="text-center mx-auto text-white text-[25px]" />
                    </a>
                  )}
                  {bannerPart.bannerButton && (
                    <h4 className="ml-[11px] mt-[40px] font-man font-semibold text-base text-primary">
                      {bannerPart.video.text}
                    </h4>
                  )}
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <img className="w-full" src={bannerPart.bannerrightimg} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
