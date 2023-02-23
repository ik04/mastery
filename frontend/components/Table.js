import React, { useState } from "react"

const Table = () => {
  const [search, setSearch] = useState("")
  const searchUser = async (e) => {
    e.PreventDefault()
  }

  return (
    <>
      <form className="mb-10" onSubmit={searchUser}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Users"
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800 transition"
          >
            Search
          </button>
        </div>
      </form>

      <ul role="list" class="p-6 divide-y divide-slate-200 w-full">
        <li class="flex py-4 first:pt-0 last:pb-0 ">
          <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">ishaan</p>
            <p class="text-sm text-slate-500 truncate">@ik_404</p>
          </div>
        </li>
        <li class="flex py-4 first:pt-0 last:pb-0">
          <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
          <div class="ml-3 overflow-hidden">
            <p class="text-sm font-medium text-slate-900">ishaan</p>
            <p class="text-sm text-slate-500 truncate">@ik_404</p>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Table
