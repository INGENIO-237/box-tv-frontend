import { Calendar, Network } from "lucide-react";
import Wrapper from "../Wrapper";
import LeadingIcon from "../common/LeadingIcon";
import { Button } from "../ui/button";
import PostCard, { Post } from "../common/Post";

export default function News() {
  const posts: Post[] = [
    {
      image: "/images/posts/post-1.png",
      category: "internet",
      title: "Using Internet For Hobby & Entertainment",
      date: "March 16, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/posts/post-2.png",
      category: "internet",
      title: "Internet Speed For Day Today Online Trading",
      date: "March 16, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/posts/post-3.png",
      category: "internet",
      title: "Using Internet For Hobby & Entertainment",
      date: "March 16, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/posts/post-3.png",
      category: "internet",
      title: "Using Internet For Hobby & Entertainment",
      date: "March 16, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/posts/post-3.png",
      category: "internet",
      title: "Using Internet For Hobby & Entertainment",
      date: "March 16, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/images/posts/post-3.png",
      category: "internet",
      title: "Using Internet For Hobby & Entertainment",
      date: "March 16, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <Wrapper className="pb-10">
      <div className="flex gap-3 items-center">
        <LeadingIcon icon={<Network color="white" />} />
        <h1 className="text-[#046C75]">Our News</h1>
      </div>
      <div className="my-5 flex justify-between items-center">
        <h1 className="font-bold text-3xl">Latest News</h1>
        <Button className="rounded-full bg-[#046C75]">All news</Button>
      </div>
      <div className="md:flex md:justify-between md:items-center">
        <div className="w-[400px] md:w-[350px] bg-[#E8E8E8] rounded-xl p-5 space-y-5 hidden md:block h-[450px]">
          {posts.slice(2).map((post, index) => {
            return (
              <div>
                <h1 className="text-lg font-bold">{post.title}</h1>
                <div className="text-gray-400 text-sm flex items-center mt-2"><Calendar size={19} className="mr-2" />{post.date}</div>
              </div>
            );
          })}
        </div>
        {posts.slice(0, 2).map((post, index) => {
          return <PostCard post={post} key={index} />;
        })}
      </div>
    </Wrapper>
  );
}
