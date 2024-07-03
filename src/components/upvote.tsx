'use client'

import { useState } from "react";

export default function Upvote() {
    const [upvotes,setUpvotes]=useState(0)
    return (
        <div>
            <button onClick={()=>{
                setUpvotes(upvotes+1)
            }} className="py-2 px-1 bg-blue-400 border font-bold text-white ">Upvote</button>
            <p>{upvotes && upvotes }</p>
        </div>
    );
}