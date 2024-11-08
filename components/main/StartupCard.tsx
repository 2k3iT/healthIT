import { formatDate } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <Link href={`/startup/${post.id}`}>
     <li className="startup-card group w-96">
      <div className="flex-between items-center">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5    ">
          <StarIcon className="size-6 text-primary" />
          <span className="text-160-medium">{post?.star}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
            <p className="text-160-medium font-bold line-clamp-1">
              {post.name}
            </p>

          <div className="w-full justify-center items-center flex my-6">
            <Image
              src={post?.avatar}
              alt="avatar"
              width={100}
              height={100}
              className=" object-cover rounded-full w-36 h-36"
            ></Image>
          </div>
        </div>
      </div>
    </li>
    </Link>
   
  );
};

export default StartupCard;
