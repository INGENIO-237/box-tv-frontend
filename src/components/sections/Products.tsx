import Wrapper from "../Wrapper";
import LeadingIcon from "../common/LeadingIcon";
import Product from "../common/Product";

export default function Products() {
  const products = [
    {
      image: "/images/products/1.png",
      features: ["internet"],
      characteristics: [
        "Home Broadband",
        "Cell Phone Connection",
        "Home Security",
        "99% Internet Uptime",
      ],
      price: 39.99,
    },
    {
      image: "/images/products/2.png",
      features: ["internet", "tv"],
      characteristics: [
        "Home Broadband",
        "Cell Phone Connection",
        "Home Security",
        "99% Internet Uptime",
      ],
      price: 39.99,
    },
    {
      image: "/images/products/3.png",
      features: ["internet", "tv", "phone"],
      characteristics: [
        "Home Broadband",
        "Cell Phone Connection",
        "Home Security",
        "99% Internet Uptime",
      ],
      price: 39.99,
    },
  ];
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center my-5 gap-3">
        {/* <Wifi /> */}
        <LeadingIcon />
        <h1 className="text-[#046C75] font-bold">BEST TV BOX Pricing</h1>
        <h1 className="text-3xl text-center font-bold">
          Discover Our Best Plans
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-between md:gap-5 my-7 lg:grid lg:grid-cols-3">
        {products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </Wrapper>
  );
}
