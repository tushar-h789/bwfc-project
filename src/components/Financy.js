import React, { useEffect, useState } from "react";
import Container from "./layout/Container";
import axios from "axios";

const Financy = () => {
  let [financyData, setFinancyData] = useState({});
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    async function financ() {
      let financy = await axios.get("https://bwfc-api.vercel.app/finance");
      setFinancyData(financy);
      setLoader(false);
      console.log(financy.data.heading);
    }
    financ();
  }, []);
  if (loader) {
    return <p>loading.....</p>;
  }

  return (
    <Container>
      <div className=" flex justify-between mt-4">
        <div className=" w-[50%]">
          <p className=" font-man font-extrabold text-lg text-primary my-6">
            {/* {financyData.data.sunbTitle} */}
            OUR FEATURE
          </p>
          <h1 className=" font-man font-bold text-[50px] text-black w-[577px] my-6">
            {financyData.data.heading}
          </h1>
          <p className=" font-man font-normal text-lg text-[#757095] my-6 w-[513px]">
            {financyData.data.paragraph}
          </p>
          <a
            href={financyData.data.button.link}
            className=" bg-primary text-white py-4 px-9 inline-block my-6 border border-solid border-primary hover:bg-transparent hover:text-primary ease-in-out duration-300 rounded-lg"
          >
            {financyData.data.button.text}
          </a>
        </div>
        <div className=" w-[50%]">
          <img src={financyData.data.image} className=" my-6" />
        </div>
      </div>
    </Container>
  );
};

export default Financy;
