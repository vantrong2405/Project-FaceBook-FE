<script setup>
//SVG
import svgNewRoom from "../svg/svgNewRoom.vue";
import svgSearch from "../svg/svgSearch.vue";
import svgDots from "../svg/svgDots.vue";
import svgCreate from "../svg/svgCreate.vue";
//SVG

import users from "../../db/user";
</script>

<template>
  <div class=" h-screen px-5 py-5 hidden w-80 lg:block">
    <div id="contacts" class="w-full flex items-center justfiy-between">
      <span class="flex-1 font-semibold text-base pl-5">Contacts</span>
      <div id="contact-buttons" class="flex gap-1">
        <div class="
            p-2
            rounded-full
            bg-myGray-900
            hover:bg-myGray-700
            cursor-pointer
            transition-colors
            duration-300
          ">
          <svg-new-room class="w-4" />
        </div>
        <div class="
            p-2
            rounded-full
            bg-myGray-900
            hover:bg-myGray-700
            cursor-pointer
            transition-colors
            duration-300
          ">
          <svg-search class="w-4" />
        </div>
        <div class="
            p-2
            rounded-full
            bg-myGray-900
            hover:bg-myGray-700
            cursor-pointer
            transition-colors
            duration-300
          ">
          <svg-dots class="w-4" />
        </div>
      </div>
    </div>
    <div id="firends" class="border-b border-myGray-250">
      <ul v-for="(user, index) in users" :key="index">
        <li class="
            flex
            items-center
            gap-3
            font-bold
            text-tiny
            cursor-pointer
            hover:bg-myGray-900
            rounded-lg
            my-2
            px-3
            py-2
            transition-colors
            duration-300
          ">
          <img :src="user.route" class="w-10 h-10 rounded-full" alt="" />
          <span> {{ user.name }} </span>
        </li>
      </ul>
    </div>
    <div id="group-conversation" class="mt-2">
      <div class="my-4 font-semibold text-base  px-3">
        Group conversations
      </div>
      <div class="
          flex
          items-center
          gap-3
          w-full
          cursor-pointer
          hover:bg-myGray-900
          p-3
          rounded-lg
          transition-colors
          duration-300
        ">
        <div id="svg-box" class="p-2 rounded-full bg-myGray-900">
          <svg-create class="w-5" />
        </div>
        <span class=" font-semibold text-tiny">Create New Group</span>
      </div>
    </div>
  </div>
</template>
