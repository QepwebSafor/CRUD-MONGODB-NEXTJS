"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-gray-800 text-zinc-100 px-8 py-2 rounded block mb-2 border"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-gray-800 text-zinc-100 px-8 py-2 rounded block mb-2 border"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-900 text-zinc-100 rounded px-8 py-2  hover:cursor-pointer hover:opacity-50 mx-auto">
        Add Topic
      </button>
    </form>
  );
}
