import { cn } from "@/lib/utils";
import Wrapper from "../Wrapper";
import styles from "@/app/styles/contact.module.css";
import ContactForm from "../common/ContactForm";
import LeadingIcon from "../common/LeadingIcon";

export default function Contact() {
  return (
    <div className="w-full relative mb-60 pb-60 md:pb-0">
      <div
        className={cn(styles.imageContainer, "w-full h-[400px] md:h-[600px] lg:h-[400px]")}
      >
        <div className={cn(styles.mask, "h-full w-full")}></div>
      </div>
      <div className="w-[100%] absolute top-[2.3%] md:top-[5%]">
        <Wrapper className="text-white md:flex md:items-baseline md:justify-between w-full">
          <div className="min-h-[150px] md:w-[80%]">
            <div className="flex items-center gap-3">
              <LeadingIcon />
              <p>BEST TV BOX Features</p>
            </div>
            <h1 className="font-bold text-3xl mt-3">
              Discover A Wider World Of Recreation
            </h1>
            <p className="mt-3">
              Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam
              massa dolor imperdiet nec consequata congue idsem. Maecenas
              malesuada faucibus finibus. Donec vitae libero porttitor laoreet
              sapiena ultrices leo. Duis dictum vestibulum ante vitae
              ullamcorper. Phasellus ullamcorper odio vitae eleifend ultricies
              lectus orci congue magna in egestas nulla libero nonnis.
            </p>
          </div>
          <div className="min-h-[150px] px-5 pt-10 flex justify-center">
            <ContactForm />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
