import Accordion from "@/components/shared/Accordion";
import React from "react";

const FAQs = () => {
  return (
    <section className="bg-darkblueBg px-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <p>FAQs</p>

          <p className="text-white text-[18px]">
            Are you looking for a reliable payment processor to help you expand
            your online business?<br/> Look no further, Zenithpay is here to help you
            access a larger market with ease!
          </p>
        </div>

        <Accordion/>
      </div>
    </section>
  );
};

export default FAQs;
