import { Tv, Rocket, Server, Cast, Wallet, Headphones } from "lucide-react";
import { Separator } from "../ui/separator";
import Wrapper from "../Wrapper";

export default function Options() {
  return (
    <>
      <Separator className="my-5" />
      <Wrapper>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-5 mb-10">
          <div className="flex flex-col items-center space-y-2">
            <Tv color="#26416C" size={35} />
            <span>250+ Channels</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Rocket color="#26416C" size={35} />
            <span>Speed Seamless</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Server color="#26416C" size={35} />
            <span>Free Installation</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Cast color="#26416C" size={35} />
            <span>4K & 8K Quality</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Wallet color="#26416C" size={35} />
            <span>Flexible Tariff Plans</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Headphones color="#26416C" size={35} />
            <span>Fast Support 24/7</span>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
