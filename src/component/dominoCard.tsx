interface Card {
  idx1: number;
  idx2: number;
}
export default function Card({ idx1, idx2 }: Card) {
    const isDup = idx1 === idx2;
  return (
    <div className="flex">
      <div className="flex flex-col justify-evenly items-center">
        <div className={isDup ? "text-red-500" : ""}>{idx1}</div>
        <hr className="border-2 border-indigo-200 w-16"/>
        <div className={isDup ? "text-red-500" : ""}>{idx2}</div>
      </div>
    </div>
  );
}
