<template>
  <div
    class="bg-card text-card-foreground fixed -bottom-2 right-3 h-[440px] w-[330px] justify-between overflow-y-auto rounded-2xl border shadow-sm"
  >
    <div class="flex flex-row items-center space-y-1.5 bg-blue-600 p-4">
      <div class="flex w-full items-center justify-between">
        <div class="flex items-center space-x-4">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img src="https://cdn.worldvectorlogo.com/logos/jira-3.svg" alt="" />
          </span>
          <div class="text-white">
            <p class="text-sm font-medium leading-none">Jira clone</p>
            <p class="text-sm">m@example.com</p>
          </div>
        </div>
        <Minus class="cursor-pointer text-end text-white" @click="toggleChat" />
      </div>
    </div>
    <div class="h-[64%] overflow-x-hidden bg-zinc-100 p-6 pt-2">
      <div class="space-y-4">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="flex h-max w-max max-w-[75%] flex-col gap-2 break-words rounded-2xl bg-blue-600 px-3 py-2 text-sm text-white"
        >
          {{ message }}
        </div>
      </div>
    </div>
    <div class="flex items-center bg-zinc-100 p-6 pt-0">
      <input
        class="border-input placeholder:text-muted-foreground focus-visible:ring-ring mr-2 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type your message..."
        v-model="inputValue"
        v-on:keyup.enter="handleAddMessage"
      />
      <button
        class="border-input ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-blue-600 text-sm font-medium text-white hover:bg-blue-800"
        @click="handleAddMessage"
      >
        <SendHorizontal size="15" strokeWidth="2" />
      </button>
    </div>
  </div>
</template>

<script>
import { SendHorizontal, Minus } from "lucide-vue-next"
export default {
  components: {
    SendHorizontal,
    Minus
  },
  props: {
    showChat: {
      type: Boolean,
      required: true
    },
    setShowChat: {
      type: Function,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    addMessage: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      inputValue: ""
    }
  },
  methods: {
    handleAddMessage() {
      if (this.inputValue.trim() !== "") {
        this.addMessage(this.inputValue)
        this.inputValue = ""
      }
    },
    toggleChat() {
      this.$emit("setShowChatEvent", !this.showChat)
    }
  }
}
</script>
