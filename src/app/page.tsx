"use client";
import Card from "@/component/dominoCard";
import { DoubleNumber, flipCard, orderAsc, orderDesc, removeByTotal, removeDuplicate, reset } from "@/function/utils";
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { HiOutlineDuplicate } from "react-icons/hi";
import { LuFlipVertical2 } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { TbSortAscendingNumbers, TbSortDescendingNumbers } from "react-icons/tb";

export default function Home() {
  const [dominoes, setDominoes] = useState([
    [1, 6],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ]);
  const [total, setTotal] = useState("");

  const handleButtonClick = (action: string) => {
    if (action === "orderAsc") {
      const updatedDominoes = orderAsc(dominoes);
      setDominoes(updatedDominoes);
    }
    if (action === "orderDesc") {
      const updatedDominoes = orderDesc(dominoes);
      setDominoes(updatedDominoes);
    }
    if (action === "removeDuplicate") {
      const updatedDominoes = removeDuplicate(dominoes);
      setDominoes(updatedDominoes);
    }
    if (action === "reset") {
      const updatedDominoes = reset();
      setDominoes(updatedDominoes);
    }
    if (action === "flip") {
      const updatedDominoes = flipCard(dominoes);
      setDominoes(updatedDominoes);
    }
    if (action === "removeByTotal") {
      const updatedDominoes = removeByTotal(dominoes, Number(total));
      setDominoes(updatedDominoes);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!isNaN(Number(value))) {
      setTotal(value); // Simpan sebagai string untuk input
    };
  };
  return (
    <div className="flex flex-col items-center py-5 bg-indigo-50 h-screen">
      <h1 className="text-4xl font-bold text-blue-700">Dominoes</h1>
      <div className="flex flex-col justify-evenly bg-white px-5 py-3 h-20 border border-indigo-400 rounded-xl my-2 min-w-[400px] lg:w-[600px]">
        <h1 className="font-bold">Source: </h1>
        <h1 className="text-indigo-500">[[1,6],[4, 3],[5, 1], [3, 4], [1, 1], [3, 4], [1, 2]]</h1>
      </div>

      <div className="flex flex-col justify-evenly bg-white px-5 py-3 h-20 border border-indigo-400 rounded-xl my-2 min-w-[400px] lg:w-[600px]">
        <h1 className="font-bold">Double Number(s):</h1>
        <h1 className="text-red-600">{DoubleNumber(dominoes)}</h1>
      </div>

      <div className="grid grid-cols-3 lg:flex min-h-40 lg:gap-10 gap-2 lg:w-[600px] w-[200px] justify-center">
        {dominoes.map((data, idx) => {
          const isLastItem = idx === dominoes.length - 1 && dominoes.length % 3 === 1;
          return (
            <div key={idx} className={`flex border-2 divide-y-2 divide-indigo-200 bg-white border-indigo-200 justify-center px-2 my-2 w-16 rounded-xl h-32 lg:h-40 ${
              isLastItem ? "col-start-2" : ""
            }`}>
              <Card
               idx1={dominoes[idx][0]} 
               idx2={dominoes[idx][1]} />
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 min-w-[400px] lg:w-[700px]">
        <button onClick={() => handleButtonClick("orderAsc")} className="bg-blue-500 lg:px-4 px-2 py-2 rounded-lg text-white m-4 hover:bg-blue-500/40 flex gap-2 items-center justify-center">
        <TbSortAscendingNumbers />Order (Asc)
        </button>

        <button onClick={() => handleButtonClick("orderDesc")} className="bg-blue-500 lg:px-4 px-2 py-2 rounded-lg text-white m-4 hover:bg-blue-500/40 flex gap-2 items-center justify-center">
        <TbSortDescendingNumbers />Order (Desc)
        </button>

        <button onClick={() => handleButtonClick("removeDuplicate")} className="bg-blue-500 lg:px-4 px-2 py-2 rounded-lg text-white m-4 hover:bg-blue-500/40 flex gap-2 items-center justify-center">
        <HiOutlineDuplicate />Remove Duplicate
        </button>

        <button onClick={() => handleButtonClick("reset")} className="bg-blue-500 lg:px-4 px-2 py-2 rounded-lg text-white m-4 hover:bg-blue-500/40 flex gap-2 items-center justify-center">
        <RiResetLeftFill /> Reset Dominoes
        </button>

        <button onClick={() => handleButtonClick("flip")} className="bg-blue-500 lg:px-4 px-2 py-2 rounded-lg text-white m-4 hover:bg-blue-500/40 flex gap-2 items-center justify-center">
        <LuFlipVertical2 />flip
        </button>

        <span className="flex mx-4">
          <input 
          type="text"
           value={total} 
           onChange={handleInputChange} placeholder="Masukkan total nilai" className="border border-blue-500 lg:px-4 px-2 lg:py-2 rounded-l-lg my-4 min-w-[30px] max-w-[210px]" />
          <button onClick={() => handleButtonClick("removeByTotal")} className="bg-blue-500 border-blue-500 lg:px-4 px-2 py-2 rounded-r-lg text-white hover:bg-blue-500/40 my-4 flex gap-2 items-center justify-center">
          <FaDeleteLeft />remove
          </button>
        </span>
          </div>
          <div>

          </div>
      </div>
  );
}
