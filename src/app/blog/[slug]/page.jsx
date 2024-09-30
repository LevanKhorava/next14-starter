import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params: { slug } }) => {
  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/28488474/pexels-photo-28488474/free-photo-of-elegant-woman-holding-red-flower-in-stylish-attire.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/28488474/pexels-photo-28488474/free-photo-of-elegant-woman-holding-red-flower-in-stylish-attire.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          {post && (
            <Suspense fallback={<div>Loadung..</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publeshed</span>
            <span className={styles.detailValue}>02.01.2000</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
