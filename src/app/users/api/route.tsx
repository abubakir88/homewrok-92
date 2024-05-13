import { NextRequest } from "next/server";
import { comments } from "./comments";

export function GET() {
  // return new Response("<h1>Comments</h1>", {
  //   headers: {
  //     "Content-Type": "text/html",
  //   },
  // });

  // return Response.json({ message: "Comments" });

  return Response.json(comments);
}

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const newComment = { text, id: comments.length + 1 };
  comments.push(newComment);
  return Response.json(newComment, { status: 201 });
}
