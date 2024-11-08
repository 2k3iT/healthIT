"use client";

import { postsData } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import OrderModal from "@/components/main/OrderModal";
import Image from "next/image";


type postProps = {
  avatar?: string;
  id?: number;
  price?: string;
  name?: string;
  class?: string;
  role?: string;
  order?: string;
  profile?: string;
  exp?: undefined;
  star?: undefined;
  _createdAt?: undefined;
};

const StartUpInfo = ({ params }: { params: Promise<{ id: string }> }) => {
  const [post, setPost] = useState<postProps>();
  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const post = postsData.find(
        (item) => item.id === Number(resolvedParams.id)
      );
      setPost(post);
    };
    fetchData();
  }, [params]);

  return (
    <div>
      <section className="blue_container !min-h-[230px]">
        <p className="tag">{post?.class}</p>

        <h1 className="heading">{post?.name}</h1>
        
        <p className="sub-heading !max-w-5xl">{post?.order}</p>
      </section>

      <section className="section_container">
        {/* <Image
          src={post?.avatar}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        /> */}

        

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post?.id}`}
              className="flex gap-2 items-center mb-3"
            >
              {/* <Image
                src={post?.avatar}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              /> */}

              {/* <div>
                <p className="text-20-medium">{post?.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author.username}
                </p>
              </div> */}
            </Link>

            <p className="category-tag">{post?.role}</p>
          </div>

          <h3 className="text-30-bold">Chi tiết bác sĩ</h3>
          {/* {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )} */}
          <div className="w-full">{post?.profile}</div>
        </div>

        <hr className="divider" />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <h3 className="text-30-bold">Kinh nghiệm làm việc</h3>
          {/* {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )} */}
          <div className="w-full">{post?.exp}</div>
          <OrderModal doctor={post?.name} />
        </div>

        {/* {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )} */}

        {/* <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense> */}
      </section>
    </div>
  );
};

export default StartUpInfo;
