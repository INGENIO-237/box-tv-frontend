import { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  title: string;
  content: string;
};

export default function Feature({ icon, title, content }: Props) {
  return (
    <div className="p-2 text-left space-y-2 border border-[#C3DAC3]">
      {icon}
      <h1 className="font-bold">{title}</h1>
      <p>{content}</p>
    </div>
  );
}
