import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MobileNavbar({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white" size={40} />
        </SheetTrigger>
        <SheetContent className="space-y-6">
          <SheetTitle>
            <img src="/logo_2.png" alt="Logo" />
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col">
            <Link className="text-lg hover:bg-gray-200 p-3 rounded" href="/">
              Home
            </Link>
            <Link
              className="text-lg hover:bg-gray-200 p-3 rounded"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="text-lg hover:bg-gray-200 p-3 rounded"
              href="/packages"
            >
              Packages
            </Link>
            <Link className="text-lg hover:bg-gray-200 p-3 rounded" href="/">
              Blog
            </Link>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
