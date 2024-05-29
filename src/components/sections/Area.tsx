import Wrapper from "../Wrapper";
import LeadingIcon from "../common/LeadingIcon";
import AreaInput from "../common/AreaInput";

export default function Area() {
  return (
    <section className="bg-[#011516] w-full min-h-[200px] py-5 pb-5 md:flex md:items-center md:jsutify-center">
      <Wrapper>
        <div className="flex flex-col items-center text-white gap-5 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <LeadingIcon color="bg-[#058590]" />
              <span>Let's Use Our Service</span>
            </div>
            <h1 className="text-2xl text-center md:text-left mt-3 font-bold">
              Check Ability To Connect Our Services In Your Area
            </h1>
          </div>
          <AreaInput />
        </div>
      </Wrapper>
    </section>
  );
}
