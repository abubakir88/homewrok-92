import { NextRequest } from "next/server";
import { users } from "./data";

export function GET() {
  // return new Response("<h1>users</h1>", {
  //   headers: {
  //     "Content-Type": "text/html",
  //   },
  // });

  // return Response.json({ message: "users" });

  return Response.json(users);
}

let newUser: any;

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const newComment = { text, id: users.length + 1 };
  users.push(newUser);
  return Response.json(newComment, { status: 201 });
}
