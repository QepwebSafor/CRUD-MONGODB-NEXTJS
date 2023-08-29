
import EditTopicForm from "@/components/EditTopicForm";
const apiUrl = process.env.API_URL;
console.log('apiUrl', apiUrl)

const getTopic = async (id) => {

  //const apiUrl= process.env.API_URL
  const res = await fetch(`${apiUrl}/api/topics/${id}`);
  return res.json();
};


export default async function EditTopic( {params} ) {
const {id}=params
  console.log('params', id)
   const {topic} = await getTopic(id);
 
   const { title, description}= topic;
   console.log('title, description', title, description)
   return <EditTopicForm id={id} title={title} description={description} />;
 }
 