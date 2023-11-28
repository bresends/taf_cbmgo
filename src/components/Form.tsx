import { clsx } from "clsx";
import { Data } from "../App";
import { Input } from "./Input";
import { Table } from "./Table";
import { useState } from "react";

interface FormProps {
  data: Data;
  setData: (data: Data) => void;
}

export function Form({ data, setData }: FormProps) {
  const [showTable, setshowTable] = useState(false);

  return (
    <div className="m-auto mx-auto px-12 xl:container sm:px-0">
      <div className="mx-auto h-full sm:w-max">
        <div className="-mx-6 mt-12 rounded-3xl border bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 sm:-mx-10 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Índices
          </h3>

          <h4 className="py-4 text-gray-600 dark:text-gray-300">Sexo</h4>

          <div className="flex grid-cols-2 flex-wrap gap-6 sm:grid">
            <button
              className={clsx(
                data.sexo === "Feminino"
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-blue-300 dark:bg-blue-700",
                "h-11 w-full rounded-full px-6 transition hover:scale-105 hover:bg-blue-400 dark:border dark:border-gray-600 dark:hover:border-gray-700 dark:hover:bg-blue-600",
              )}
              onClick={() => setData({ ...data, sexo: "Masculino" })}
            >
              <div className="mx-auto flex w-max items-center justify-center space-x-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  viewBox="0 0 320 512"
                  className="fill-current text-gray-800 dark:text-white"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
                </svg>

                <span className="block w-max text-sm font-semibold tracking-wide text-gray-800 dark:text-white">
                  Masculino
                </span>
              </div>
            </button>

            <button
              onClick={() => setData({ ...data, sexo: "Feminino" })}
              className={clsx(
                data.sexo === "Masculino"
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-pink-300 dark:bg-pink-700",
                "h-11 w-full rounded-full border border-gray-300/75 px-6 transition hover:scale-105 hover:bg-pink-300 active:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-700 dark:hover:bg-pink-600",
              )}
            >
              <div className="mx-auto flex w-max items-center justify-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  viewBox="0 0 320 512"
                  className="fill-current text-gray-800 dark:text-white"
                >
                  <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
                </svg>

                <span className="block w-max text-sm font-semibold tracking-wide text-gray-800 dark:text-white">
                  Feminino
                </span>
              </div>
            </button>
          </div>

          <div className="mt-4 space-y-6 dark:text-white">
            <div className="border-b border-gray-900/10 pb-6">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Input
                    label="Corrida de 12 minutos (metros)"
                    min={0}
                    max={3300}
                    {...{ data, setData }}
                    change="corrida"
                  />
                </div>

                <div className="sm:col-span-3">
                  <Input
                    label="Barra Fixa (repetições)"
                    min={0}
                    max={3300}
                    {...{ data, setData }}
                    change="barras"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Input
                    label="Flexão de Braço (repetições)"
                    min={0}
                    max={3300}
                    {...{ data, setData }}
                    change="flexao"
                  />
                </div>

                <div className="sm:col-span-3">
                  <Input
                    label="Abdominal (repetições)"
                    min={0}
                    max={3300}
                    {...{ data, setData }}
                    change="abdominal"
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <Input
                    label="Natação (segundos)"
                    min={20}
                    max={3300}
                    {...{ data, setData }}
                    change="natacao"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setshowTable(!showTable)}
                className="flex h-11 w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 dark:bg-sky-400"
              >
                <span className="text-base font-semibold text-white dark:text-gray-900">
                  Calcular Média
                </span>
              </button>
              <Table {...{ showTable, data }} />
            </div>
          </div>
        </div>
        <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
          <div className="space-x-4 text-center">
            <span>© Devisio</span>
          </div>
        </div>
      </div>
    </div>
  );
}
