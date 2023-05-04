import React from "react";
import Container from "./layout/Container";

const Footer = () => {
  return (
    <div className="bg-[#1B1C31]">
      <Container>
        <section className="flex  py-28">
          <div className="w-[52%] mr-10">
            <h2 className="font-man font-bold text-xl text-white">BWFC</h2>
            <p className="font-man text-base text-para mt-4 ">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </p>
          </div>
          <div className="w-[16%] text-white">
            <ul>
              <h3 className="font-man text-xl font-bold">Company</h3>
              <li className="font-man text-base font-medium mt-9">About Us</li>
              <li className="font-man text-base font-medium mt-4">Careers</li>
              <li className="font-man text-base font-medium mt-4">Blog</li>
              <li className="font-man text-base font-medium mt-4">Pricing</li>
            </ul>
          </div>
          <div className="w-[16%] text-white">
            <ul>
              <h3 className="font-man text-xl font-bold">Product</h3>
              <li className="font-man text-base font-medium mt-9">
                Invoicing Platform
              </li>
              <li className="font-man text-base font-medium mt-4">
                Accounting Plateform
              </li>
              <li className="font-man text-base font-medium mt-4">
                Create Proposal
              </li>
              <li className="font-man text-base font-medium mt-4">Contracts</li>
            </ul>
          </div>
          <div className="w-[16%] text-white">
            <ul>
              <h3 className="font-man text-xl font-bold">Resources</h3>
              <li className="font-man text-base font-medium mt-9">
                Proposal Template
              </li>
              <li className="font-man text-base font-medium mt-4">
                Invoice Template
              </li>
              <li className="font-man text-base font-medium mt-4">Tuturoial</li>
              <li className="font-man text-base font-medium mt-4">
                How to write a contract
              </li>
            </ul>
          </div>
        </section>
      </Container>
      <div className="bg-[#1B1C31] border-t border-[#404444]">
        <Container>
          <section className="flex items-center justify-between  p-5">
            <div>
              <p className="font-man text-base text-white">
                2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms
                of Services
              </p>
            </div>
            <di>
              <p className="font-man text-xs text-white ">
                Supported by Microsoft Startup
              </p>
            </di>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
