import { Network } from "lucide-react";
import Wrapper from "../Wrapper";
import LeadingIcon from "./LeadingIcon";

export default function Map() {
  return (
    <Wrapper>
      <div className="my-5 mb-10 md:flex md:items-center md:gap-10">
        <img src="/images/map.png" className="md:w-[90%] md:h-[90%]" alt="Map" />
        <div className="my-10">
          <div className="flex gap-3 items-center">
            <LeadingIcon icon={<Network color="white" />} />
            <h1 className="text-[#046C75]">Get Blazing Fast Internet</h1>
          </div>
          <h1 className="text-3xl font-bold my-3">
            BEST TV BOX Is Available To All Corners Of The Country
          </h1>
          <p>
            Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa
            dolor imperdiet nec consequata congue idsem. Maecenas malesuada
            faucibus finibus. Donec vitae libero{" "}
          </p>

          <p className="mt-7 font-bold">Call Us Now For Connect Evernet</p>
          <p className="font-bold text-[#046C75] text-2xl">+(62) 800-567-8990</p>
        </div>
      </div>
    </Wrapper>
  );
}
