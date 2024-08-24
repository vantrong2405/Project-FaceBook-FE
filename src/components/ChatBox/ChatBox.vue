<template>
    <div
        class="fixed -bottom-2 right-3 h-[440px] w-[330px]  justify-between border bg-card text-card-foreground shadow-sm rounded-2xl overflow-y-auto">
        <div class="flex flex-row items-center space-y-1.5 p-4 bg-blue-600">
            <div class="flex justify-between items-center w-full">
                <div class="flex items-center space-x-4">
                    <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <img src="https://cdn.worldvectorlogo.com/logos/jira-3.svg" alt="" />
                    </span>
                    <div class="text-white">
                        <p class="text-sm font-medium leading-none">Jira clone</p>
                        <p class="text-sm">m@example.com</p>
                    </div>
                </div>
                <Minus class="text-end text-white cursor-pointer" @click="toggleChat" />
            </div>
        </div>
        <div class="h-[64%] p-6 pt-2  bg-zinc-100 overflow-x-hidden">
            <div class="space-y-4">
                <div v-for="(message, index) in messages" :key="index"
                    class="flex w-max h-max max-w-[75%] text-white flex-col gap-2 rounded-2xl px-3 py-2 text-sm bg-blue-600 break-words">
                    {{ message }}
                </div>
            </div>
        </div>
        <div class="flex items-center p-6 pt-0 bg-zinc-100">
            <input
                class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mr-2"
                placeholder="Type your message..." v-model="inputValue" v-on:keyup.enter="handleAddMessage" />
            <button
                class="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-blue-600 text-white text-sm font-medium hover:bg-blue-800"
                @click="handleAddMessage">
                <SendHorizontal size="15" strokeWidth="2" />
            </button>
        </div>
    </div>


</template>

<script>
import { SendHorizontal, Minus } from 'lucide-vue-next';

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
            inputValue: ''
        };
    },
    methods: {
        handleAddMessage() {
            if (this.inputValue.trim() !== '') {
                this.addMessage(this.inputValue);
                this.inputValue = '';
            }
        },
        toggleChat() {
            this.$emit('setShowChatEvent', !this.showChat);
        }
    }
};
</script>