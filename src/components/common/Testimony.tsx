import { Star } from "lucide-react";
import styles from "@/app/styles/testimonials.module.css";
import { cn } from "@/lib/utils";

export type Testimonial = {
  author: {
    fullname: string;
    image: string;
    role: string;
  };
  content: string;
};

export default function Testimony({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div
      className={cn(
        "p-5 border min-h-[240px] w-[400px] bg-white rounded-[20px] md:w-[350px] md:min-h-[260px] space-y-5",
        styles.testimony
      )}
    >
      <div className="flex gap-1">
        <Star className="fill-yellow-500 text-yellow-500 w-3.5 h-3.5" />
        <Star className="fill-yellow-500 text-yellow-500 w-3.5 h-3.5" />
        <Star className="fill-yellow-500 text-yellow-500 w-3.5 h-3.5" />
        <Star className="fill-yellow-500 text-yellow-500 w-3.5 h-3.5" />
        <Star className="fill-yellow-500 text-yellow-500 w-3.5 h-3.5" />
      </div>

      <div className="flex items-center gap-5">
        <img
          src={testimonial.author.image}
          className="pointer-events-none w-[15%] h-[15%]"
          alt={testimonial.author.fullname}
        />
        <div>
          <h1 className="text-xl font-bold">{testimonial.author.fullname}</h1>
          <p className="text-sm text-gray-500">{testimonial.author.role}</p>
        </div>
      </div>
      <p>{testimonial.content}</p>
    </div>
  );
}
