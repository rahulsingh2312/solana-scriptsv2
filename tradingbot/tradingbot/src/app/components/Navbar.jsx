import Image from "next/image"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar(){
    return(
        <div className=" md:flex hidden justify-between">
        <div className="flex items-center justify-center">
<div className="flex items-center justify-center ml-10 gap-3 my-6">
<Image
              className=" rounded-full "
              src="/lfg.jpg"
              alt="Vercel logomark"
              width={35}
              height={35}
            />
            LFG.AI
</div>

    <div className="flex ml-10 gap-3 my-6">
        CopyTrade
    </div>
    <div className="flex ml-10 gap-3 my-6">
        Monitor
    </div>
    <div className="flex ml-10 gap-3 my-6">
        Follow
    </div>

        </div>
        <div className="flex mx-10 gap-3 my-6 rotate-3">
<WalletMultiButton 
style={{
    background: "white",
    color:"black",
    border: "1px solid black",
    zIndex: "100",
    borderRadius: "15px",
  }}
/>
        </div>
        </div>
    )
}