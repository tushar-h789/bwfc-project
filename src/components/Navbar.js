import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Container from "./layout/Container";

const Navbar = () => {
  let [navbarData, setNavbarData] = useState({});
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    async function nav() {
      let navbar = await axios.get("https://bwfc-api.vercel.app/navbar");
      setNavbarData(navbar.data);
      setLoader(false);
    }
    nav();
  }, []);

  if (loader) {
    return <h1>Loading ...</h1>;
  }

  return (
    <Container className="max-w-container mx-auto ">
      <div className="flex justify-between items-center mt-7">
        <div className="w-[10%] ">
          <img src={navbarData.logo} />
        </div>
        <div className="w-[56%] ">
            <ul
              className="flex justify-center gap-x-9 font-man font-normal text-sm"
              
              >
              {navbarData.navItems.map((nitem, index) => (
              <li key={index} className="hover:text-primary relative group transition ease-in-out delay-150">
                {nitem.item}
                {nitem.dropDown && (
                  <>
                    <FaAngleDown className="absolute top-1 -right-4"/>
                    <ul className=" absolute top-full left-0 bg-white p-5 min-w-[100px] hidden group-hover:block rounded-lg shadow-md">
                    {nitem.dropDownItem.map((ditem, dindex) => (
                      <li key={dindex}>{ditem.dropItem}</li>
                    ))}
                    </ul>
                  </>
                )}
              </li>
          ))}
          </ul>
        </div>
        <div className="w-[34%] flex justify-end ">
          {navbarData.buttonOne.visibility && (
            <a
              className=" text-primary py-4 px-9 font-man font-semibold text-sm rounded-lg border border-solid border-transparent hover:bg-primary hover:text-white transition ease-in-out delay-150"
              href="#"
            >
              {navbarData.buttonOne.text}
            </a>
          )}
          {navbarData.buttonTwo.visibility && (
            <a
              className="bg-primary text-white py-4 px-9 font-man font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150 mx-2"
              href="#"
            >
              {navbarData.buttonTwo.text}
            </a>
          )}
          {navbarData.buttonThree.visibility && (
          <a
            className="bg-primary text-white py-4 px-9 font-man font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150"
            href="#"
          >
            {navbarData.buttonThree.text}
          </a>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
