<template>
    <div>
        <div v-if="allNewFeedDetail?.medias?.length === 1">
            <img :src="allNewFeedDetail.medias[0].url" alt=""
                class="w-full h-[280px] object-content border-2 cursor-pointer" />
        </div>
        <div class="grid grid-cols-2 gap-1" v-if="allNewFeedDetail?.medias?.length === 2">
            <img :src="allNewFeedDetail.medias[0].url" alt=""
                class="w-full h-[280px] object-content border-2 cursor-pointer" />
            <img :src="allNewFeedDetail.medias[1].url" alt=""
                class="w-full h-[280px] object-content border-2 cursor-pointer" />
        </div>
        <div class="grid grid-cols-3 gap-1" v-if="allNewFeedDetail?.medias?.length === 3">
            <img :src="allNewFeedDetail.medias[0].url" alt="" class="col-span-2 w-full cursor-pointer h-full" />
            <div>
                <img :src="allNewFeedDetail.medias[1].url" alt=""
                    class="w-full h-[140px] object-content border-2 cursor-pointer" />
                <img :src="allNewFeedDetail.medias[2].url" alt=""
                    class="w-full h-[140px] object-content border-2 cursor-pointer" />
            </div>
        </div>
        <div class="grid grid-cols-2 gap-1" v-if="allNewFeedDetail?.medias?.length === 4">
            <img :src="allNewFeedDetail.medias[0].url" alt=""
                class="w-full h-[280px] object-content border-2 cursor-pointer" />
            <img :src="allNewFeedDetail.medias[1].url" alt=""
                class="w-full h-[280px] object-content border-2 cursor-pointer" />
            <img :src="allNewFeedDetail.medias[2].url" alt=""
                class="w-full h-[280px] object-content border-2 cursor-pointer" />
            <img :src="allNewFeedDetail.medias[3].url" alt=""
                class="w-full h-[280px] object-content border-2 cursor-pointer" />
        </div>
        <div class="grid grid-cols-6 gap-1" v-if="allNewFeedDetail?.medias?.length === 5">
            <div class="col-span-3">
                <img :src="allNewFeedDetail.medias[0].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-3">
                <img :src="allNewFeedDetail.medias[1].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-2">
                <img :src="allNewFeedDetail.medias[2].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-2">
                <img :src="allNewFeedDetail.medias[3].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-2">
                <img :src="allNewFeedDetail.medias[4].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
        </div>
        <div class="grid grid-cols-6 gap-1" v-if="allNewFeedDetail?.medias?.length === 6">
            <div class="col-span-3">
                <img :src="allNewFeedDetail.medias[0].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-3">
                <img :src="allNewFeedDetail.medias[1].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-2">
                <img :src="allNewFeedDetail.medias[2].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-2">
                <img :src="allNewFeedDetail.medias[3].url" alt=""
                    class="w-full h-[280px] object-content border-2 cursor-pointer" />
            </div>
            <div class="col-span-2 relative main">
                <div class="w-full h-full -z-10">
                    <img :src="allNewFeedDetail.medias[4].url" alt=""
                        class="w-full h-[280px] object-content border-2 cursor-pointer" />
                </div>
                <div class="activeFull z-30 text-white text-lg"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        allNewFeedDetail: {
            type: Object,
            default: []
        }
    }
}
</script>
<style></style>