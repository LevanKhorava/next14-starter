import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    console.log(post);
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch Posts");
  }
};
export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.deleteOne({ slug: slug });
    console.log(post);
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete Post");
  }
};
