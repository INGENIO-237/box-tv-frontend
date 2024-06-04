import { cn } from "@/lib/utils";
import styles from "@/app/styles/hero.module.css";
import MobileNavbar from "./MobileNavbar";
import { Separator } from "../ui/separator";
import Wrapper from "../Wrapper";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Hero({ className, children }: Props) {
  return (
    <div className={cn("w-full h-auto text-white", className)}>
      <div className={cn("w-full h-auto pb-10", styles.mask)}>
        <Wrapper className="h-auto py-5 text-white flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div>
            Service Client :{" "}
            <span className="font-bold">+(62) 800-567-8990</span>
          </div>
          <div className="flex justify-between w-full md:w-[20%]">
            <div className="bg-white w-8 h-8 text-[#26416C] flex justify-center items-center rounded-full">
              <Facebook size={15} />
            </div>
            <div className="bg-white w-8 h-8 text-[#26416C] flex justify-center items-center rounded-full">
              <Twitter size={15} />
            </div>
            <div className="bg-white w-8 h-8 text-[#26416C] flex justify-center items-center rounded-full">
              <Linkedin size={15} />
            </div>
            <div className="bg-white w-8 h-8 text-[#26416C] flex justify-center items-center rounded-full">
              <Youtube size={15} />
            </div>
          </div>
        </Wrapper>
        <Separator />
        <Wrapper className="py-5 flex justify-between items-center h-auto">
          <img src="logo_2.png" className="w-50 h-40 -ml-5" alt="" />
          {/* Normal Navbar */}
          <Navbar className="hidden md:block w-auto" />

          {/* Mobile Navbar */}
          <MobileNavbar className="block md:hidden" />
        </Wrapper>
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}
