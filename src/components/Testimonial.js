import React, { useEffect, useState } from "react";
import Container from "./layout/Container";
import axios from "axios";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";

const Testimonial = () => {
  let [testimonialPart, setTestimonialpart] = useState({});

  let [loader, setLoader] = useState(true);

  useEffect(() => {
    async function mtestimonial() {
      let testimonial = await axios.get("https://bwfc-api.vercel.app/client");
      setTestimonialpart(testimonial.data);
      setLoader(false);
    }
    mtestimonial();
  }, []);

  if (loader) {
    return <p>wait</p>;
  }

  return (
    <>
      <section className="mt-[60px]">
        <Container>
          <h4 className="font-man font-bold text-sm	 text-primary uppercase ">
            {testimonialPart.subTitle}
          </h4>
          <h3 className="font-man font-extrabold text-[40px] mt-[13px]	w-[355px] text-black ">
            {testimonialPart.title}
          </h3>
          <div className="flex">
            <div className="w-1/2 mt-11">
              <img src={testimonialPart.sliderItem[0].image} />
            </div>
            <div className="w-1/2 mt-9 pl-[100px]">
              <RiDoubleQuotesL className="text-secondary text-[40px]" />
              <h2 className="font-man font-extrabold text-xl mt-4	w-[290px] text-black">
                {testimonialPart.sliderItem[0].heading}
              </h2>
              <p className="font-man font-normal text-base mt-4	w-[474px] text-[#757095]">
                {testimonialPart.sliderItem[0].paragraph}
              </p>
              <div className="flex mt-2 gap-1">
                {testimonialPart.sliderItem[0].rating == 5 ? (
                  <>
                    <BsFillStarFill className="text-secondary" />
                    <BsFillStarFill className="text-secondary" />
                    <BsFillStarFill className="text-secondary" />
                    <BsFillStarFill className="text-secondary" />
                    <BsFillStarFill className="text-secondary" />
                  </>
                ) : (
                  <>
                    <BsFillStarFill className="text-secondary" />
                    <BsFillStarFill className="text-secondary" />
                    <BsFillStarFill className="text-secondary" />
                    <BsFillStarFill className="text-secondary" />
                  </>
                )}
              </div>
              <h4 className="font-man font-extrabold text-base mt-[5px]	w-[290px] text-black">
                {testimonialPart.sliderItem[0].name}
              </h4>
              <h5 className="font-man font-normal	text-sm	 mt-[1px]	w-[290px] text-[#757095]">
                {testimonialPart.sliderItem[0].designation}
              </h5>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
