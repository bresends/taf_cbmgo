import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { getScore } from "../scores";

const scoreSchema = z.object({
  sex: z.enum(["Masculino", "Feminino"], {
    errorMap: () => ({ message: "Informe o o sexo do avaliado" }),
  }),
  staff: z.enum(["QOS", "QOC"], {
    errorMap: () => ({ message: "Informe o Quadro" }),
  }),
  pushUps: z.coerce
    .number()
    .min(1, "Revise este campo")
    .max(100, "Insira um valor menor que 100"),
  pullUps: z.coerce
    .number()
    .min(1, "Revise este campo")
    .max(100, "Insira um valor menor que 100"),
  run: z.coerce
    .number()
    .min(1, "Revise este campo")
    .max(5000, "Insira um valor menor que 100"),
  swim: z.coerce
    .number()
    .min(1, "Revise este campo")
    .max(100, "Insira um valor menor que 100"),
  sitUps: z.coerce
    .number()
    .min(1, "Revise este campo")
    .max(100, "Insira um valor menor que 100"),
});

export type scoresFormData = z.infer<typeof scoreSchema>;

export function Card() {
  const [showTable, setshowTable] = useState(false);

  const [scores, setScores] = useState({
    pullUps: 0,
    run: 0,
    pushUps: 0,
    sitUps: 0,
    swim: 0,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<scoresFormData>({
    resolver: zodResolver(scoreSchema),
  });

  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit: SubmitHandler<scoresFormData> = (data) => {
    setshowTable(true);
    const newScores = {
      pullUps: getScore({
        exercise: "pullUps",
        category: data.staff,
        gender: data.sex,
        value: data.pullUps,
      }),
      run: getScore({
        exercise: "run",
        category: data.staff,
        gender: data.sex,
        value: data.run,
      }),
      pushUps: getScore({
        exercise: "pushUps",
        category: data.staff,
        gender: data.sex,
        value: data.pushUps,
      }),
      sitUps: getScore({
        exercise: "sitUps",
        category: data.staff,
        gender: data.sex,
        value: data.sitUps,
      }),
      swim: getScore({
        exercise: "swim",
        category: data.staff,
        gender: data.sex,
        value: data.swim,
      }),
    };

    setScores(newScores);

    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="mx-auto px-12 xl:container sm:px-0">
      <div className="mx-auto h-full sm:w-max">
        <div className="-mx-6 mt-12 rounded-3xl border bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 sm:-mx-10 sm:p-10">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Índices
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="py-4 text-gray-600 dark:text-gray-300">Sexo</h4>
            <div className="flex grid-cols-2 flex-wrap gap-6 sm:grid">
              <label
                htmlFor="male"
                className="flex w-full justify-center gap-2 rounded-md border bg-blue-500 py-4 transition hover:scale-105 hover:bg-blue-600 active:scale-95 dark:border-gray-600 dark:bg-blue-700 dark:hover:border-gray-700 dark:hover:bg-blue-600"
              >
                <input
                  {...register("sex")}
                  type="radio"
                  name="sex"
                  value="Masculino"
                  id="male"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  viewBox="0 0 320 512"
                  className="fill-current text-white"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
                </svg>

                <span className="block w-max text-sm font-semibold tracking-wide text-white">
                  Masculino
                </span>
              </label>
              <label
                htmlFor="female"
                className="flex w-full justify-center gap-2 rounded-md border bg-pink-500 py-4 transition hover:scale-105 hover:bg-pink-600 active:scale-95 dark:border-gray-600 dark:bg-pink-700 dark:hover:border-gray-700 dark:hover:bg-pink-600"
              >
                <input
                  {...register("sex")}
                  type="radio"
                  name="sex"
                  value="Feminino"
                  id="female"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  viewBox="0 0 320 512"
                  className="fill-current text-white"
                >
                  <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
                </svg>

                <span className="block w-max text-sm font-semibold tracking-wide text-white">
                  Feminino
                </span>
              </label>
            </div>

            {errors.sex && (
              <span className="mt-2 py-2 text-sm text-red-500">
                {errors.sex.message}
              </span>
            )}

            <h4 className="py-4 text-gray-600 dark:text-gray-300">Quadro</h4>

            <div className="flex grid-cols-2 flex-wrap gap-6 sm:grid">
              <label
                htmlFor="QOC"
                className="flex w-full justify-center gap-2 rounded-md border bg-[#F37748] py-4 transition hover:scale-105 hover:bg-[#F0612D] active:scale-95 dark:border-gray-600 dark:bg-[#F37748] dark:hover:border-gray-700 dark:hover:bg-[#F69A79]"
              >
                <input
                  {...register("staff")}
                  type="radio"
                  name="staff"
                  value="QOC"
                  id="QOC"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  viewBox="0 0 320 512"
                  className="fill-current text-white"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
                </svg>

                <span className="block w-max text-sm font-semibold tracking-wide text-white">
                  CFP/Combatente e CFO
                </span>
              </label>

              <label
                htmlFor="QOS"
                className="flex w-full justify-center gap-2 rounded-md border bg-[#09BC8A] py-4 transition hover:scale-105 hover:bg-[#08AF80] active:scale-95 dark:border-gray-600 dark:bg-[#09BC8A] dark:hover:border-gray-700 dark:hover:bg-[#0BEAAB]"
              >
                <input
                  {...register("staff")}
                  type="radio"
                  name="staff"
                  value="QOS"
                  id="QOS"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  viewBox="0 0 320 512"
                  className="fill-current text-white"
                >
                  <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
                </svg>

                <span className="block w-max text-sm font-semibold tracking-wide text-white">
                  CFP/Músico e QOS
                </span>
              </label>
            </div>

            {errors.staff && (
              <span className="mt-2 py-2 text-sm text-red-500">
                {errors.staff.message}
              </span>
            )}

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  className="text-zinc-900 dark:text-zinc-100"
                  htmlFor="run"
                >
                  Corrida de 12 minutos (metros)
                </label>
                <input
                  type="number"
                  {...register("run")}
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200"
                />
                {errors.run && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.run.message}
                  </span>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  className="text-zinc-900 dark:text-zinc-100"
                  htmlFor="pullUps"
                >
                  {watch("sex") !== "Feminino"
                    ? "Barra Fixa (repetições)"
                    : "Isometria (segundos)"}
                </label>
                <input
                  type="number"
                  {...register("pullUps")}
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200"
                />
                {errors.pullUps && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.pullUps.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="text-zinc-900 dark:text-zinc-100" htmlFor="">
                  Flexão no solo (repetições)
                </label>
                <input
                  type="number"
                  {...register("pushUps")}
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200"
                />
                {errors.pushUps && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.pushUps.message}
                  </span>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  className="text-zinc-900 dark:text-zinc-100"
                  htmlFor="pullUps"
                >
                  Abdominal (repetições)
                </label>
                <input
                  type="number"
                  {...register("sitUps")}
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200"
                />
                {errors.sitUps && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.sitUps.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-5">
              <div className="sm:col-span-3">
                <label
                  className="text-zinc-900 dark:text-zinc-100"
                  htmlFor="pullUps"
                >
                  {watch("staff") !== "QOS"
                    ? "Natação de 50 metros (segundos)"
                    : "Natação de 25 metros (segundos)"}
                </label>
                <input
                  type="number"
                  {...register("swim")}
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-gray-200"
                />
                {errors.swim && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.swim.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              onClick={() => setshowTable(true)}
              className="mt-10 h-11 w-full rounded bg-blue-500 px-3 text-sm font-semibold text-white transition hover:scale-105 focus:bg-sky-600 active:scale-95 active:bg-sky-800 dark:bg-sky-400"
            >
              Calcular Média
            </button>
          </form>

          {showTable && !hasErrors && (
            <div className="relative mt-12 overflow-x-auto rounded-md">
              <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-300 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
                    <td className="px-6 py-4">{scores.run}</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Barra Fixa
                    </th>
                    <td className="px-6 py-4">{scores.pullUps}</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Flexão de braço
                    </th>
                    <td className="px-6 py-4">{scores.pushUps}</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Abdominal
                    </th>
                    <td className="px-6 py-4">{scores.sitUps}</td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Natação
                    </th>
                    <td className="px-6 py-4">{scores.swim}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-200 font-semibold text-gray-900 dark:bg-gray-700  dark:text-white">
                    <th scope="row" className="px-6 py-3 text-base">
                      Média
                    </th>
                    <td className="px-6 py-3">
                      {Object.values(scores).reduce(
                        (sum, currentScore) => sum + currentScore,
                        0,
                      ) / 5}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
