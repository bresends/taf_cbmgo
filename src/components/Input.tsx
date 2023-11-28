import { Data } from "../App";
import { getScore } from "../scores";

interface InputProps {
  label: string;
  min: number;
  max: number;
  data: Data;
  setData: (data: Data) => void;
  change: keyof Data;
}

export function Input({ label, min, max, data, setData, change }: InputProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="pwd" className="my-1 text-gray-600 dark:text-gray-300">
          {label}
        </label>
      </div>
      <input
        type="number"
        name={label}
        id={label}
        min={min}
        max={max}
        onChange={(e) => {
          change !== "sexo" && [
            setData({
              ...data,
              [change]: {
                ...data[change],
                value: parseInt(e.target.value),
                score: getScore({
                  gender: data.sexo,
                  exercise: change,
                  value: parseInt(e.target.value),
                }),
              },
            }),
          ];
        }}
        className="block w-full rounded-md border border-gray-200 bg-transparent px-4 py-2 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600 dark:text-gray-200"
      />
    </div>
  );
}
