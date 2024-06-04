import { ArrowRight, Check, Smartphone, Tv, Wifi } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  image: string;
  features: string[];
  characteristics: string[];
  price: number;
};

// #D4D4D4
export default function Product({ product }: { product: Props }) {
  const { image, features, characteristics, price } = product;
  return (
    <div className="relative w-80 md:w-60 lg:w-80 border my-5 p-5 pt-20">
      <span className="absolute top-5 right-5 py-1 px-5 bg-[#C3DAC3] rounded-full">
        Promo
      </span>
      <div className="flex justify-center">
        <img
          src={image}
          className="pointer-events-none w-40 h-40"
          alt="Product image"
        />
      </div>
      <div className="my-5 flex justify-center gap-5">
        <Wifi color="#26416C" />
        {features.includes("tv") && <Tv color="#26416C" />}
        {features.includes("phone") && <Smartphone color="#26416C" />}
      </div>
      <div className="my-5 flex justify-center gap-5">
        <span>
          Internet
          {features.includes("tv") && " + TV"}
          {features.includes("phone") && " + Phone"}
        </span>
      </div>
      <div className="flex justify-center">
        <div>
          {characteristics.map((characteristic, index) => {
            return (
              <span className="flex gap-3" key={index}>
                <div className="w-max p-1 mb-3 bg-[#26416C] rounded-full">
                  <Check size={15} color="white" />
                </div>
                {characteristic}
              </span>
            );
          })}
        </div>
      </div>

      <p className="text-center mt-5">
        <span className="text-[#FC5130] text-2xl font-bold">{price}$</span>
        /month
      </p>

      <div className="flex justify-center mt-3 mb-7">
        <Button className="rounded-full bg-[#26416C] px-7 space-x-5">
          <span>Buy</span> <ArrowRight color="white" />
        </Button>
      </div>
    </div>
  );
}
