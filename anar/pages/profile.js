import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-orange-200 justify-center items-center">
        <div className="flex w-4/5 h-4/5 bg-lime-200 rounded-2xl justify-center items-center">
            <img
             src="https://mintykitchen.com/wp-content/uploads/2023/10/pomegranate-open-500x375.jpg"
             className="w-"
            >
              
            </img>
        </div>

    </div>
  );
};

