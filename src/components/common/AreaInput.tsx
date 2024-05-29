import { Button } from "../ui/button";

export default function AreaInput() {
  return (
    <div className="bg-white p-1 rounded-full max-w-screen">
      <input
        type="email"
        className="h-full rounded-l-full text-black outline-none pl-4 max-w-[69%] md:max-w-[54%] lg:max-w-[70%]"
        placeholder="Your email"
      />
      <Button type="submit" className="rounded-full bg-[#26416C]">
        Check now
      </Button>
    </div>
  );
}
