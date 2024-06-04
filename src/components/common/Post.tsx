import styles from "@/app/styles/posts.module.css";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

export type Post = {
  image: string;
  category: string;
  title: string;
  date: string;
  content: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="h-[450px] w-full md:w-[350px] flex flex-col justify-between pb-10">
      <div>
        <div className="relative">
          <img src={post.image} className="rounded-xl pointer-events-none" alt={post.title} />
          <div className="absolute p-2 bottom-0 bg-white border-none text-red-600 text-sm">
            {post.category}
          </div>
        </div>
        <div className="space-y-3 mt-5">
          <h1 className="text-xl font-bold">{post.title}</h1>
          <div className="text-gray-400 text-sm flex items-center mt-2">
            <Calendar size={19} className="mr-2" />
            {post.date}
          </div>
          <p>{post.content}</p>
        </div>
      </div>
      <div>
        <p className="flex text-red-600 gap-2">
          See more <ArrowRight />
        </p>
      </div>
    </div>
  );
}
