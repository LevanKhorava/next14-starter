import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  "use server";
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog"); // we do not assaing no store method to get all blog request so we have to do this
  } catch (error) {
    return { error: "Something  went wrong" };
  }
};

export const deletePost = async (formData) => {
  "use server";

  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/blog"); // we do not assaing no store method to get all blog request so we have to do this
  } catch (error) {
    return { error: "Something  went wrong" };
  }
};
