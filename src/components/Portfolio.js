import React from "react";
import Container from "./layout/Container";

const Portfolio = () => {
  return (
    <div className=" bg-primary">
      <Container>
        <div className=" flex justify-between">
          <div>
            <p className=" font-man font-bold text-sm text-white mt-20">
              WHY CHOOSE US
            </p>
            <h1 className=" font-man font-extrabold text-[50px] text-white w-[528px] mt-4">
              Track your crytpo portfolio on the best way possible
            </h1>
            <p className=" font-man font-normal text-lg text-para w-[446px] mt-7 mb-14">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
          <div className=" flex items-center w-[50%] justify-center">
            <div>
              <input
                placeholder="Email Adress"
                className=" w-[371px] h-[60px] mt-6 rounded-md"
              />
              <input
                placeholder="Password"
                className=" w-[371px] h-[60px] mt-6 rounded-md"
              />
              <a
                className=" inline-block mt-6 bg-secondary py-4 px-[140px] font-man font-bold text-base text-white border border-solid border-secondary hover:bg-transparent hover:border-white rounded-md"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
