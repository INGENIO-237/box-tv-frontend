import { cn } from "@/lib/utils";
import { Wifi } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  color?: string;
  icon?: ReactNode;
};

export default function LeadingIcon({ icon, color }: Props) {
  return (
    <span className={cn("p-2 rounded-full bg-[#26416C]", color)}>
      {icon && icon}
      {!icon && <Wifi color="white" />}
    </span>
  );
}
