"use client"

import CodeBlock from "@/components/shared/CodeBlock";
import Image from "next/image";
import React, {useState} from "react";
import gradient from "../../../public/assets/images/gradient.png";

const Language = () => {
    const [language, setlanguage] = useState("python")
     

    const handleClick = (param: string)=>{
        setlanguage(param)
    }

  return (
    <section className="bg-darkblueBg  px-9">
      <div className="relative">
        <div className="flex flex-row max-w-[600px] w-full gap-8">
          <p>Language</p>

          <div className="flex flex-row gap-4 items-center ">
            <p className="cursor-pointer" onClick={()=> handleClick("python")}>Pyhton</p>
            <p className="cursor-pointer" onClick={()=> handleClick("javascript")}>Javascript</p>
          </div>
        </div>

        <div className="relative h-[800px] w-full flex flex-col items-center mt-10">
          
          <Image src={gradient} alt="gradeint" className="w-full -z-2 absolute bottom-0"/>
          <div className="absolute z-4 -top-[7px]">
            <CodeBlock  language={language}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Language;
