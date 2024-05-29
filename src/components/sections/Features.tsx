import Wrapper from "../Wrapper";
import Brothers from "../common/Brothers";
import LeadingIcon from "../common/LeadingIcon";
import { Separator } from "../ui/separator";

export default function Features() {
  return (
    <Wrapper>
      <div className="my-20 md:flex md:gap-5">
        {/* Left */}
        <div>
          {/* Up */}
          <div>
            <div className="flex items-center gap-3">
              <LeadingIcon />
              <h1 className="text-[#046C75] font-bold">BEST TV BOX Features</h1>
            </div>
            <h1 className="my-3 text-3xl font-bold">
              Discover A Wider World Of Recreation
            </h1>
            <p className="text-left">
              Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam
              massa dolor imperdiet nec consequata congue idsem. Maecenas
              malesuada faucibus finibus. Donec vitae libero porttitor laoreet
              sapiena ultrices leo. Duis dictum vestibulum ante vitae
              ullamcorper. Phasellus ullamcorper odio vitae eleifend ultricies
              lectus orci congue magna in egestas nulla libero nonnis.
            </p>
          </div>
          <Separator className="my-5" />
          {/* Down */}
          <div className="space-y-3 mb-10 lg:flex lg:items-start gap-5">
            <img
              src="/images/japanese.png"
              className="w-full rounded-br-lg rounded-tl-lg"
              alt="Japanese spouses"
            />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              ullamcorper malesuada finibus. ultricies lectus orci congue magna
              in egestas.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="md:flex md:justify-center md:items-center">
          <Brothers />
        </div>
      </div>
    </Wrapper>
  );
}
