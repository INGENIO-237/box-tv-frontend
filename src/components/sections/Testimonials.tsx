import { cn } from "@/lib/utils";
import Wrapper from "../Wrapper";
import styles from "@/app/styles/testimonials.module.css";
import LeadingIcon from "../common/LeadingIcon";
import { Users } from "lucide-react";
import Testimony from "../common/Testimony";

export default function Testimonials() {
  const testimonials = [
    {
      author: {
        fullname: "Laura Ferguson",
        role: "Project manager",
        image: "/images/testimony/user-1.png",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      author: {
        fullname: "Audrey steverson",
        role: "Project manager",
        image: "/images/testimony/user-2.png",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      author: {
        fullname: "Fred Rodriguez",
        role: "Project manager",
        image: "/images/testimony/user-3.png",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="w-full flex flex-col pb-10">
      <div className={cn(styles.imageContainer, "w-full md:h-[500px]")}>
        {/* Mask */}
        <div className={cn("h-full w-full", styles.mask)}>
          <Wrapper className="flex flex-col justify-center md:justify-start py-7 md:pt-20 md:pb-0 text-center items-center gap-3 text-white">
            {/* <div className="flex flex-col h-full justify-center text-center items-center gap-3 text-white"> */}
            <LeadingIcon icon={<Users color="white" />} />
            <h1>Testimonials</h1>
            <h1 className="text-2xl font-bold">What Our Clients Say</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* </div> */}
          </Wrapper>
        </div>
      </div>
      <div className="md:relative md:flex md:justify-center bg-orange-600">
        <Wrapper className="md:flex md:flex-justify-center md:items-center md:h-auto md:pb-20 md:absolute md:-top-40">
          <div className="flex flex-col items-center md:flex-row gap-5 mt-5 md:justify-center w-full">
            {testimonials.map((testimonial) => {
              return <Testimony testimonial={testimonial} />;
            })}
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
