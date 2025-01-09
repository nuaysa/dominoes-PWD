interface Card {
  idx1: number;
  idx2: number;
}
export default function Card({ idx1, idx2 }: Card) {
  return (
    <div className="flex">
      <div className="flex flex-col justify-evenly items-center">
        <div className="">{idx1}</div>
        <hr className="border-2 border-indigo-200 w-16"/>
        <div className="">{idx2}</div>
      </div>
    </div>
  );
}
