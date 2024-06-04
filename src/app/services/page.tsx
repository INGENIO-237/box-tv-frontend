import {
  BarChart,
  Building,
  FastForward,
  RadioTowerIcon,
  Shield,
  Smartphone,
  Tv,
  Wifi,
} from "lucide-react";
import Services, { Service } from "../../components/sections/Services";
import React from "react";
import Map from "../../components/sections/Map";
import Area from "../../components/sections/Area";
import Features from "../../components/sections/Features";
import Hero from "@/components/common/Hero";
import styles from "@/app/styles/hero.module.css";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
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
    { icon: <Shield color="#26416C" size={35} />, title: "Home Security" },
    {
      icon: <Smartphone color="#26416C" size={35} />,
      title: "Mobile Connection",
    },
    { icon: <Tv color="#26416C" size={35} />, title: "Satellite TV" },
    { icon: <Building color="#26416C" size={35} />, title: "Home Broadband" },
  ];

  return (
    <div>
      {/* Hero */}
      <Hero className={cn(styles.servicesImageContainer)}>
        <div className="flex justify-center items-center mb-20">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
      </Hero>
      <Services services={services} />;
      <Map />
      <Area />
      <Features />
    </div>
  );
}
