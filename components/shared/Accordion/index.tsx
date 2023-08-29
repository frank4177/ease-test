"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const data = [
  { id: 1, title: "humm", text: "loosjd jddk" },
  { id: 2, title: "humm", text: "loosjd jddk" },
  { id: 3, title: "humm", text: "loosjd jddk" },
];

const Accordion = () => {
  const [first, setfirst] = useState<number>(0);

  const handleClick = (param: number) => {
    if (param === first) {
      setfirst(0)
    } else{
      setfirst(param);
    }
   
  };

  return (
    <>
      <div className="w-full flex flex-col space-y-5">
        {data.map((item) => (
          <div className="  border-[1px] border-white p-3 flex flex-col ">
            <div
              className="h-full  p-3 flex flex-row justify-between"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <p>Text</p>
              <AiOutlinePlus color="white" size={22} />
            </div>

            {item.id === first ? (
              <div className="p-3">
                <p>ldlddkdkd</p>
              </div>
            ) : null}

          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
