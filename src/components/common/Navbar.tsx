import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("space-x-5", className)}>
      <Link className="text-lg" href="/">Home</Link>
      <Link className="text-lg" href="/services">Services</Link>
      <Link className="text-lg" href="/packages">Packages</Link>
      <Link className="text-lg" href="/">Blog</Link>
    </div>
  );
}
