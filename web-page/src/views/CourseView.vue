<template>
  <div class="min-h-full">
    <Navbar></Navbar>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Course {{ $route.params.id }}</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <ul role="list" class="divide-y divide-gray-100">
          <li v-for="project in data" class="flex justify-between gap-x-6 py-5 rounded overflow-hidden shadow-lg px-6">
            <div class="flex min-w-0 gap-x-4">
              <a v-bind:href="'http://52.64.186.140:3080/static/web-ui/server/1/project/' + project.project_id"
                target="_blank">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  GO
                </button>
              </a>
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{{ project.name }}</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ project.project_id }}</p>
              </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p v-if="project.status == 'opened'" class="mt-1 text-xs leading-5 text-gray-500">
              <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p class="text-sm leading-6 text-gray-900">{{ project.status }}</p>
              </p>

              <div v-else class="mt-1 flex items-center gap-x-1.5">
                <div class="flex-none rounded-full bg-red-500/20 p-1">
                  <div class="h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
                <p class="text-sm leading-6 text-gray-900">{{ project.status }}</p>
              </div>

            </div>
            <div class="flex justify-center items-center ">
              <p class="px-4">Score: 0</p>
              <a v-bind:href="'/visualize/' + project.project_id">
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Visualize
                </button>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
  
<script setup>
import Navbar from '@/components/Navbar.vue'
import useFetch from '@/api/fetch'
import { parse } from 'postcss';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
}

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    lastSeen: null,
  },
]
const { data, error } = useFetch(() => `http://52.64.186.140:3080/v2/projects`)
</script>