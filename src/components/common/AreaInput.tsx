import { Button } from "../ui/button";

export default function AreaInput() {
  return (
    <div className="bg-white p-1 rounded-full">
      <input
        type="email"
        className="h-full rounded-l-full text-black outline-none pl-4"
        placeholder="Your email"
      />
      <Button type="submit" className="rounded-full bg-[#26416C]">Check now</Button>
    </div>
  );
}
