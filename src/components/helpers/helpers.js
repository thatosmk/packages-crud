
const inputClassName = "block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

function differenceBetweenTimes(from, to) {
  const diff = Math.abs((to - from) / 1000); // diff in milliseconds

  return diff / 3600;
}

export { inputClassName, differenceBetweenTimes }
