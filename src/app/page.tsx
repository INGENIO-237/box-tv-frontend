import Map from "@/components/sections/Map";
import Area from "@/components/sections/Area";
import Features from "@/components/sections/Features";
import Options from "@/components/sections/Options";
import Products from "@/components/sections/Products";
import Services, { Service } from "@/components/sections/Services";
import {
  BarChart,
  Check,
  FastForward,
  Play,
  RadioTowerIcon,
  Wifi,
} from "lucide-react";
import Testimonials from "@/components/sections/Testimonials";
import News from "@/components/sections/News";
import Hero from "@/components/common/Hero";
import styles from "@/app/styles/hero.module.css";
import LeadingIcon from "@/components/common/LeadingIcon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services: Service[] = [
    { icon: <Wifi color="#26416C" size={35} />, title: "Wifi Seamless" },
    { icon: <BarChart color="#26416C" size={35} />, title: "Speed On Demand" },
    {
      icon: <RadioTowerIcon color="#26416C" size={35} />,
      title: "Upgrade Speed",
    },
    {
      icon: <FastForward color="#26416C" size={35} />,
      title: "Download 1Gbps",
    },
  ];
  return (
    <div>
      {/* Hero */}
      <Hero className={cn(styles.homeImageContainer)}>
        <div className="flex items-center gap-3">
          <LeadingIcon icon={<Wifi color="#26416C" />} color="bg-white" />
          <h1>Receive your codes in minutes</h1>
        </div>
        <h1 className="text-3xl lg:text-5xl lg:mt-10 font-bold my-5">
          The best tv box at the best price
        </h1>
        <div className="grid grid-cols-2 max-w-[500px] gap-5">
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>Home Broadband</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>Download 1Gbps</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>Cell Phone Connection</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>Evernet TV Box</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>Home Security</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>Mobile Connection</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>99% Internet Uptime</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <Check color="#26416C" size={15} />
            </div>
            <h1>24/7 Customer Support</h1>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-10">
          <Button className="bg-[#058590] rounded-full">See details</Button>
          <div className="p-2 bg-[#D9D9D92B] rounded-full">
            <Button className="bg-white rounded-full w-10 h-10">
              <Play color="#26416C" className="fill-[#26416C]" />
            </Button>
          </div>
        </div>
      </Hero>

      {/* Services */}
      <Services services={services} />

      {/* Features */}
      <Features />

      {/* Options */}
      <Options />

      {/* Area */}
      <Area />

      {/* Products */}
      <Products />

      {/* Map */}
      <Map />

      {/* Testimonials */}
      <Testimonials />

      {/* News */}
      <News />
    </div>
  );
}
