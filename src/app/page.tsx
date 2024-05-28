import { Wifi } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    // Presentation
    <section>
      <div className="flex flex-col justify-center items-center my-5">
        <Wifi  />
        <h1>BEST TV BOX Features</h1>
        <h1 className="text-3xl text-center">We Are Internet Service Provider Company</h1>
      </div>
    </section>
  );
}
