import Hero from "@/components/common/Hero";
import Options from "@/components/sections/Options";
import Products from "@/components/sections/Products";
import styles from "@/app/styles/hero.module.css";
import { cn } from "@/lib/utils";
import Contact from "@/components/sections/Contact";
import Inquries from "@/components/sections/Inquries";

export default function Packages() {
  return (
    <div>
      <Hero className={cn(styles.packagesImageContainer)}>
        <div className="flex justify-center items-center mb-20">
          <h1 className="text-5xl font-bold">Packages</h1>
        </div>
      </Hero>
      <Products />
      <Options />
      <Contact />
      <Inquries />
    </div>
  );
}
