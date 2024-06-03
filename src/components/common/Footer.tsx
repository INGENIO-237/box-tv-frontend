import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Wrapper from "../Wrapper";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#011516] text-white pt-10">
      <Wrapper className="space-y-10">
        {/* Up */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Left */}
          <div className="flex flex-col justify-center items-center md:items-baseline md:justify-baseline">
            <img
              src="/logo_2.png"
              className="w-[50%] h-[50%] md:w-[70%] md:h-[70%] pointer-events-none"
              alt="Logo"
            />
            <div className="flex gap-5">
              <Link href="#" target="_blank">
                <Facebook />
              </Link>
              <Link href="#" target="_blank">
                <Instagram />
              </Link>
              <Link href="#" target="_blank">
                <Linkedin />
              </Link>
              <Link href="#" target="_blank">
                <Youtube />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="mt-7 space-y-5">
            <h1>NEW BEST BOX TV</h1>
            <p>Subscribe to our newsletter to receive our best offers!</p>
            <div className="w-full h-[35px]">
              <input type="text" placeholder="Your email address" className="h-full w-[75%] bg-[#C3DAC3] pl-3 text-black outline-none" />
              <Button className="h-full w-[25%] bg-[#046C75] hover:bg-[#046C75] rounded-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Down */}
        <div className="flex justify-between items-center flex-wrap md:items-baseline">
          <div>
            <h1 className="font-bold">NAVIGATION</h1>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">SUPPORT</h1>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="#" target="_blank">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Installation guide
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 md:mt-0">
            <h1 className="font-bold">CONTACT</h1>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="#" target="_blank" className="flex gap-2">
                  <MapPin /> 99 Roving St., Big City, PKU 23456
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" className="flex gap-2">
                  <Phone /> +(1) 800-567-8990
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" className="flex gap-2">
                  <Mail /> support@domain.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      {/* Sponsors */}
      <div className="w-full bg-[#000F10] mt-20">
        <Wrapper className="py-5 md:py-7 flex flex-col items-center md:flex-row md:justify-between">
          <span className="text-center">
            © 2023 - BEST BOX TV | Designed by Mentalists
          </span>
          <div className="flex justify-between mt-5 w-full md:mt-0 md:w-[50%]">
            <Link href="#" target="_blank">
              Mastercard
            </Link>
            <Link href="#" target="_blank">
              PayPal
            </Link>
            <Link href="#" target="_blank">
              VISA
            </Link>
            <Link href="#" target="_blank">
              Amazon Pay
            </Link>
            <Link href="#" target="_blank">
              Stripe
            </Link>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
