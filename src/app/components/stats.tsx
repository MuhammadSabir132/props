'use client';
import { validateHeaderValue } from "http";
import Image from "next/image";
import { useState } from "react";


 function Stats() {
  const [counter , setCounter] = useState(0)
  const handleIncrement = () => {
   setCounter(counter + 1)
  }
  return (


<div className="flex flex-col justify-center space-y-3 items-center h-screen bg-gray-500 ">
  <div className="bg-red-600 h-40 w-1/3 flex flex-col justify-center space-y-3 items-center rounded-md ">
<h1>useState</h1>
<p>{counter}</p>

<button onClick={handleIncrement} className=" bg-green-300 border border-gray-400 p-3 rounded-sm">Increment</button>


</div>
</div>

 );
}
export default Stats