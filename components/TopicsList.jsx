
import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";

import TopicCard from "./TopicCard";
async function getTopics() {
  await connectDB();
  const topics = await Topic.find();
  return topics;
}


export default async function TopicsList() {
  const  topics  = await getTopics();

  return (
    <>
      {topics.map((t) => (
       <TopicCard t={t} key={t._id}/>
      ))}
    </>
  );
}
