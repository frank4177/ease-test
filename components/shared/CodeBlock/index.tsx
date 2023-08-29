"use client"

import React from "react";
import { CopyBlock } from "react-code-blocks";

const code = '# Set API key client_token: "EASEPAY_TOKEN_ID"client_detail: "ed-5678-abes-de456573kkasams"Client.setApiKeys({client_token, client_detail})charge = await Client.createCharge({node_id: "Easepay_Lightning_No[....]1887b",invoice: "lnbc5u1pjthddkpp5kmrcfu9yc5dff", currency: "Naira", timeout_secs: 60, channel_id: "280d1f4baa73e6bc9430c6de1e91ae4c857057085e76516084dc9", maximum_fees_sats: 265,} ) # Print charg print(charge)'

const codeo = " another code stuff"
interface Iprop {
  language: string
}
const CodeBlock = ( prop : Iprop) => {
  const {language} = prop
  // const [languageDemo, changeDemo] = useState(["jsx"]);
  return (
    <div className="w-[900px] h-[500px] bg-black">
      <div className="max-w-[700px] w-full h-[600px]">
        <p>
          {language === "python" ? code : language === "javascript" ? codeo : code}
        </p>
      </div>

     {/* <CopyBlock
          language="go"
          text={`${code}`}
          codeBlock
          theme='dracula'
          showLineNumbers={false}
          className="bg-red-600"
        /> */}
    </div>
  );
};

export default CodeBlock;
