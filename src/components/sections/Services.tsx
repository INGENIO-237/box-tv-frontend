import { ReactElement } from "react";
import Wrapper from "../Wrapper";
import Feature from "../common/Feature";
import LeadingIcon from "../common/LeadingIcon";

export type Service = {
  icon: ReactElement;
  title: string;
};

export default function Services({ services }: { services: Service[] }) {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center my-5 gap-3">
        {/* <Wifi /> */}
        <LeadingIcon />
        <h1 className="text-[#046C75] font-bold">BEST TV BOX Features</h1>
        <h1 className="text-3xl text-center font-bold">
          We Are Internet Service <br />
          Provider Company
        </h1>
      </div>
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 mt-10">
        {services.map((service, index) => {
          const { icon, title } = service;

          return (
            <Feature
              icon={icon}
              title={title}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
          );
        })}
      </div>
    </Wrapper>
  );
}
