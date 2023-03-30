import React, { useEffect, useState } from "react";
import HeaderMenu from "views/home/HeaderMenu";
import Navigation from "components/Navigation"
import Main from "components/sections/Main"
import Meet from "components/sections/Meet"
import Story from "components/sections/Story";
import Roadmap from "components/sections/Roadmap"
import Team from "components/sections/Team"
import Footer from "components/Footer"
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { ButtonC } from "components/button";
import { useApprove } from "hooks/useApprove";
import { chainTokens } from "config/tokens";

export const PageIndex = () => {
  const { account }= useActiveWeb3React()
  const { requestedApproval, handleApprove } = useApprove(chainTokens.usdt.address)

  return (
    <div className="h-full w-full flex flex-col bg-auto bg-no-repeat bg-right-bottom"
    >
      {/*<HeaderMenu />*/}
      <Navigation />
      <Main />
      <Meet />
      <Story />
      <Roadmap />
      <Team />
      <Footer />
      
      <div>
        <ButtonC
          onClick={() => {
            handleApprove()
          }}
        >Approve {requestedApproval === 2 ? ' Success ' : ' '}</ButtonC>
      </div>
      <div className="mt-5">
        <ButtonC >Transfer</ButtonC>
      </div>
      
      
    </div>
  )
}

export default PageIndex