<template>
  <Navbar></Navbar>
  <div class="bg-white py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex">
      <!-- <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Visualize</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
      </div> -->
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="node in nodesData" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <!-- <component :is="node.name" class="h-6 w-6 text-white" aria-hidden="true" /> -->
              </div>
              {{ node.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              Console : {{ node.console }} type : {{ node.console_type }}<br>
              Node Id : {{ node.node_id }} type : {{ node.node_type }}
            </dd>
          </div>
        </dl>
      </div>
      <!-- Component: Colored Activity feed -->
      <ul aria-label="Colored activity feed" role="feed"
        class="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200 ">
        <li role="article" class="relative pl-8 ">
          <span
            class="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-white -translate-x-1/2 rounded-full ring-2 ring-white bg-emerald-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5" role="presentation">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
          </span>
          <div class="flex flex-col flex-1 gap-0">
            <h4 class="text-base font-medium text-slate-700"> Nodes Check </h4>
            <p class="text-sm text-slate-500">Correct</p>
          </div>
        </li>
        <li role="article" class="relative pl-8 ">
          <span
            class="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-white -translate-x-1/2 rounded-full ring-2 ring-white bg-emerald-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5" role="presentation">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </span>
          <div class="flex flex-col flex-1 gap-0">
            <h4 class="text-base font-medium text-slate-700"> Nodes Config</h4>
            <p class="text-sm text-slate-500">Correct</p>
          </div>
        </li>
        <li role="article" class="relative pl-8 ">
          <span
            class="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-white -translate-x-1/2 rounded-full ring-2 ring-white bg-amber-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5" role="presentation">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </span>
          <div class="flex flex-col flex-1 gap-0">
            <h4 class="text-base font-medium text-slate-700"> Nodes Connect </h4>
            <p class="text-sm text-slate-500">13:32pm</p>
          </div>
        </li>
        <li role="article" class="relative pl-8 ">
          <span
            class="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-white -translate-x-1/2 rounded-full ring-2 ring-white bg-emerald-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5" role="presentation">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
          </span>
          <div class="flex flex-col flex-1 gap-0">
            <h4 class="text-base font-medium text-slate-700"> New user added </h4>
            <p class="text-sm text-slate-500">13:56pm</p>
          </div>
        </li>
        <li role="article" class="relative pl-8 ">
          <span
            class="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-white -translate-x-1/2 rounded-full ring-2 ring-white bg-amber-500 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5" role="presentation">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </span>
          <div class="flex flex-col flex-1 gap-0">
            <h4 class="text-base font-medium text-slate-700"> Warning! Project is going to be expired </h4>
            <p class="text-sm text-slate-500">13:32pm</p>
          </div>
        </li>
        <li role="article" class="relative pl-8 ">
          <span
            class="absolute left-0 z-10 flex items-center justify-center w-10 h-10 text-white -translate-x-1/2 bg-pink-500 rounded-full ring-2 ring-white ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5" role="presentation">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </span>
          <div class="flex flex-col flex-1 gap-0">
            <h4 class="text-base font-medium text-slate-700"> Project deleted </h4>
            <p class="text-sm text-slate-500">13:32pm</p>
          </div>
        </li>
      </ul>
      <!-- End Colored Activity feed -->
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import useFetch from '@/api/fetch'
import { useRoute } from 'vue-router';
import { nextTick, ref } from 'vue';
import { onMounted } from 'vue';

const route = useRoute()
const projectId = route.params.project_id

const projectData = useFetch(`http://52.64.186.140:3080/v2/projects/${projectId}`).data
const nodesData = useFetch(`http://52.64.186.140:3080/v2/projects/${projectId}/nodes`).data

const visualize = {
  analys: 'ping',
  nodes: ['PC1', 'PC2'],
  result: 'Connected'
}

const url = `http://localhost:3000/ping/5000/5002`
function ping(url, cb) {
  fetch(url)
    .then(response => response.text())
    .then(result => cb(result));
}


ping(url, (node) => console.log(node))

</script>