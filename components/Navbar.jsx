import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <nav>
    <div className="max-w-7x3 mx-auto bg-gray-800 px-4 sm:px-4 md:px-6 lg:px-8 ">
      <div className=" flex items-center justify-between h-16 rounded-none pt-0">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Qepweb.com.es</h1>
        </Link>
        <ul>
          <li className="flex gap-x-4">
            <Link href={"/addTopic"}>Add Topic</Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
}
export default Navbar;
