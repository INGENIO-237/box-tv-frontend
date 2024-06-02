import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Wrapper({ className, children }: Props) {
  return (
    <div className={cn("h-full mx-auto w-full max-w-screen-xl px-5 md:px-20", className)}>
      {children}
    </div>
  );
}
