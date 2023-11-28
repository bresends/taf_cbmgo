import { Data } from "../App";

interface TableProps {
  showTable: boolean;
  data: Data;
}

function calculateAverageScore(data: Data): number {
  const scoreFields = [
    "corrida",
    "flexao",
    "abdominal",
    "natacao",
    "barras",
  ] as const;

  const totalScore = scoreFields.reduce((acc, field) => {
    return acc + data[field].score;
  }, 0);

  const averageScore = totalScore / scoreFields.length;

  return averageScore;
}

export function Table({ showTable, data }: TableProps) {
  return (
    showTable && (
      <div className="relative mt-12 overflow-x-auto rounded-md">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Exercício
              </th>
              <th scope="col" className="px-6 py-3">
                Nota
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Corrida
              </th>
              <td className="px-6 py-4">{data.corrida.score}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Barra Fixa
              </th>
              <td className="px-6 py-4">{data.barras.score}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Flexão de braço
              </th>
              <td className="px-6 py-4">{data.flexao.score}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Abdominal
              </th>
              <td className="px-6 py-4">{data.abdominal.score}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Natação
              </th>
              <td className="px-6 py-4">{data.natacao.score}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 text-xs font-semibold text-gray-900 dark:bg-gray-700  dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Média
              </th>
              <td className="px-6 py-3">{calculateAverageScore(data)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  );
}
