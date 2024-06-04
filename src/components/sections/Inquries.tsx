import { Check } from "lucide-react";
import Wrapper from "../Wrapper";
import LeadingIcon from "../common/LeadingIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import styles from "@/app/styles/contact.module.css";
import { cn } from "@/lib/utils";

export default function Inquries() {
  return (
    <Wrapper className="mb-20 flex flex-col gap-5 md:flex-row md:justify-between">
      <div className={cn(styles.inqury, "md:w-[80%]")}>
        <div className="bg-[#058590E5] w-full p-5 text-white">
          <h1 className="text-3xl font-bold">
            Connect Your Phone With Mobile WIFI
          </h1>
          <div className="mt-5 space-y-3">
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
              <h1>Cell Phone Connection</h1>
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
              <h1>99% Internet Uptime</h1>
            </div>
          </div>
          <Button className="mt-10 bg-[#26416C] hover:bg-[#26416C] rounded-full font-bold">
            Read more
          </Button>
        </div>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <LeadingIcon />
          <h1 className="text-[#046C75]">Client Inquries</h1>
        </div>
        <h1 className="font-bold text-3xl mt-3">Related Questions</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-5">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">
                What things will be provided by Evernet?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua eius
                tempor incididunt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">
                What things will be provided by Evernet?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua eius
                tempor incididunt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">
                What things will be provided by Evernet?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua eius
                tempor incididunt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Wrapper>
  );
}
