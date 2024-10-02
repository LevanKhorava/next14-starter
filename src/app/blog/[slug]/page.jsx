import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params: { slug } }) => {
  const post = await getData(slug);
  console.log(post);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params: { slug } }) => {
  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" className={styles.img} fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>Loadung..</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )} */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publeshed</span>
            <span className={styles.detailValue}>02.01.2000</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
