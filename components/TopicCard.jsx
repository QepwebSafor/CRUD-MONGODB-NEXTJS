import React from 'react'
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
function TopicCard({t}) {
 const {_id, description, title}=t;
  return (
    <div
    key={_id}
    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
  >
    <div>
      <h2 className="font-bold text-2xl">{title}</h2>
      <div>{description}</div>
    </div>

    <div className="flex gap-2">
      <RemoveBtn id={_id} />
      <Link href={`/editTopic/${_id}`}>
        <HiPencilAlt size={24} />
      </Link>
    </div>
  </div>
  )
}

export default TopicCard