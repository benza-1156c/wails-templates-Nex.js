"use client";

import { useState } from "react";
import { Greet } from "../../wailsjs/go/main/App";

export default function Home() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  async function onGreet() {
    try {
      if (!name.trim()) {
        setGreet("Hello! 👋");
        return;
      }
      setGreet(`Hello, ${name.trim()}! 👋`);
      Greet(name);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-400 via-cyan-300 to-emerald-200">
      <div className="w-[92%] max-w-3xl bg-white/80 dark:bg-zinc-900/70 rounded-3xl p-10 md:p-12 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col items-center gap-6">
          <div className="flex cursor-pointer items-center gap-6">
            <img
              src="/wails.png"
              alt="Wails"
              className="h-40 md:h-44 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
            />

            <span className="text-4xl font-light text-slate-700">+</span>

            <img
              src="/next.svg"
              alt="Next.js"
              className="h-18 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-4 mt-1 w-full">
            <p className="text-white text-center text-sm">
              Please enter your name below 👇
            </p>

            <div className="flex items-center gap-3 w-full justify-center">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-10 w-64 md:w-72 rounded px-4 border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <button
                onClick={onGreet}
                className="h-10 cursor-pointer px-4 rounded bg-sky-600 shadow"
              >
                Greet
              </button>
            </div>

            <div className="min-h-8 mt-2 flex justify-center items-center">
              {greet && (
                <div className="inline-block rounded-md bg-white/90 px-4 py-2 text-sky-700 shadow-md">
                  {greet}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
