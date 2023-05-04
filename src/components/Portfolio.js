import React from "react";
import Container from "./layout/Container";

const Portfolio = () => {
  return (
    <section className=" bg-primary mt-[100px]">
      <Container>
        <div className="  flex justify-between ">
          <div className=" w-1/2">
            <p className=" font-man font-bold text-sm text-white mt-20">
              WHY CHOOSE US
            </p>
            <h1 className=" font-man font-extrabold text-[50px] text-white w-[528px] mt-4">
              Track your crytpo portfolio on the best way possible
            </h1>
            <p className=" font-man font-normal text-lg text-white w-[446px] mt-7 mb-14">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
          <div className=" w-1/2 mt-32">
            <div className=" text-center ">
              <input
                placeholder="Email Adress"
                className=" w-[371px] h-[60px] mt-6 rounded-md py-4 pl-5 bg-[#BBB5E0]"
              />
              <input
                placeholder="Password"
                className=" w-[371px] h-[60px] mt-6 rounded-md bg-[#BBB5E0] py-4 pl-5"
              />
              <a
                className=" inline-block mt-6 bg-secondary py-4 px-[140px] font-man font-bold text-base text-white border border-solid border-secondary hover:bg-transparent hover:border-white rounded-md"
                href="www.google.com"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
