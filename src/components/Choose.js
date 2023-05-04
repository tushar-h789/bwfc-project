
import React, { useEffect, useState } from "react";
import Container from "./layout/Container";
import axios from "axios";

const Choose = () => {
  let [chooseData, setChooseData] = useState({});
  let [loader, setLoader] = useState(true)

  useEffect(() => {
    async function Choose() {
      let chooseData = await axios.get("https://bwfc-api.vercel.app/choose");
      setChooseData(chooseData.data);
      console.log(chooseData.data.items[0].visibility);
      setLoader(false)
    }
    Choose();
  }, []);

  if(loader){
    return <p>Loading...</p>
  }

  return (
    <Container>
      <div className="bg-[#F3F7FA] py-14 px-20 mt-[94px] rounded-lg">
        <div className="text-center mt-10">
          <h4 className="font-man font-extrabold text-lg text-[#3734A9]">
            {chooseData.subTitle}
          </h4>
          <h2 className="font-man font-bold text-5xl mt-2">
            {chooseData.title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-between">
          {chooseData.items && 
            chooseData.items.map((item, index) => (
              item.visibility &&
              <div key={index} className="flex w-[48%] bg-white mt-8 py-14 rounded-xl">
                <div
                  className="w-[58px] h-[58px] bg-[#D8F5F1] rounded-full pl-14 ml-7"
                  style={{ backgroundColor: item.circleColor }}
                ></div>
                <div className="pl-6">
                  <h3 className="font-man text-2xl font-extrabold ">
                    {item.title}
                  </h3>
                  <p className="font-man font-normal	 mr-2 text-para mt-5">
                    {item.details}
                  </p>
                </div>
              </div>
            
            ))}
        </div>

      </div>
    </Container>
  );
};

export default Choose;

