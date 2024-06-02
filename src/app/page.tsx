import Map from "@/components/sections/Map";
import Area from "@/components/sections/Area";
import Features from "@/components/sections/Features";
import Options from "@/components/sections/Options";
import Products from "@/components/sections/Products";
import Services, { Service } from "@/components/sections/Services";
import { BarChart, FastForward, RadioTowerIcon, Wifi } from "lucide-react";
import Testimonials from "@/components/sections/Testimonials";

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

      <Testimonials />
    </div>
  );
}
