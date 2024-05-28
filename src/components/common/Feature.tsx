import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  content: string;
};

export default function Feature({ icon, title, content }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
