import Wrapper from "@/components/Wrapper";
import AreaInput from "@/components/common/AreaInput";
import Brothers from "@/components/common/Brothers";
import Feature from "@/components/common/Feature";
import LeadingIcon from "@/components/common/LeadingIcon";
import { Separator } from "@/components/ui/separator";
import {
  BarChart,
  Cast,
  FastForward,
  Headphones,
  RadioTowerIcon,
  Rocket,
  Server,
  Tv,
  Wallet,
  Wifi,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Presentation */}
      <section>
        <Wrapper>
          <div className="flex flex-col justify-center items-center my-5 gap-3">
            {/* <Wifi /> */}
            <LeadingIcon />
            <h1 className="text-[#046C75] font-bold">BEST TV BOX Features</h1>
            <h1 className="text-3xl text-center font-bold">
              We Are Internet Service Provider Company
            </h1>
          </div>
          <div className="grid gap-5 md:grid-cols-4 lg:grid-cols-4">
            <Feature
              icon={<Wifi color="#26416C" size={35} />}
              title="Wifi Seamless"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Feature
              icon={<BarChart color="#26416C" size={35} />}
              title="Wifi Seamless"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Feature
              icon={<RadioTowerIcon color="#26416C" size={35} />}
              title="Wifi Seamless"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Feature
              icon={<FastForward color="#26416C" size={35} />}
              title="Wifi Seamless"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
          </div>

          {/* Features */}
          <div className="my-20">
            {/* Left */}
            <div>
              {/* Up */}
              <div>
                <div className="flex items-center gap-3">
                  <LeadingIcon />
                  <h1 className="text-[#046C75] font-bold">
                    BEST TV BOX Features
                  </h1>
                </div>
                <h1 className="my-3 text-3xl font-bold">
                  Discover A Wider World Of Recreation
                </h1>
                <p className="text-left">
                  Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam
                  massa dolor imperdiet nec consequata congue idsem. Maecenas
                  malesuada faucibus finibus. Donec vitae libero porttitor
                  laoreet sapiena ultrices leo. Duis dictum vestibulum ante
                  vitae ullamcorper. Phasellus ullamcorper odio vitae eleifend
                  ultricies lectus orci congue magna in egestas nulla libero
                  nonnis.
                </p>
              </div>
              <Separator className="my-5" />
              {/* Down */}
              <div className="space-y-3 mb-10">
                <img
                  src="/images/japanese.png"
                  className="w-full rounded-br-lg rounded-tl-lg"
                  alt="Japanese spouses"
                />
                <p className="sm:mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo ullamcorper malesuada finibus. ultricies lectus orci
                  congue magna in egestas.
                </p>
              </div>
            </div>
            {/* Right */}
            <div>
              <Brothers />
            </div>
          </div>
        </Wrapper>
        <Separator className="my-5" />
        <Wrapper>
          <div className="grid grid-cols-3 gap-y-5 mb-10">
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
      </section>

      {/* Area */}
      <section className="bg-[#011516] w-full min-h-[100px] py-5">
        <Wrapper>
          <div className="flex flex-col items-center text-white gap-5">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3">
                <LeadingIcon color="bg-[#058590]" />
                <span>Let's Use Our Service</span>
              </div>
              <h1 className="text-2xl text-center mt-3 font-bold">
                Check Ability To Connect Our Services In Your Area
              </h1>
            </div>
            <AreaInput />
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
