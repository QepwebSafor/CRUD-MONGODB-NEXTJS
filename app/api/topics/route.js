import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectDB();
  try {
    const data = await request.json();
    const newTopic = new Topic(data);
    const savedTopic = await newTopic.save();
    return NextResponse.json(savedTopic);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function GET() {
  await connectDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  try {
    const topicFound = await Topic.findByIdAndDelete(id);
    if (!topicFound)
      return NextResponse.json(
        {
          message: "Topic not found",
        },
        { status: 404 }
      );
    return NextResponse.json(topicFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
