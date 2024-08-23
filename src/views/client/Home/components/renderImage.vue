<template>
  <div>
    <div v-if="allNewFeedDetail?.medias?.length === 1">
      <img
        :src="allNewFeedDetail.medias[0].url"
        alt=""
        class="object-content h-[280px] w-full cursor-pointer border-2"
      />
    </div>
    <div class="grid grid-cols-2 gap-1" v-if="allNewFeedDetail?.medias?.length === 2">
      <img
        :src="allNewFeedDetail.medias[0].url"
        alt=""
        class="object-content h-[280px] w-full cursor-pointer border-2"
      />
      <img
        :src="allNewFeedDetail.medias[1].url"
        alt=""
        class="object-content h-[280px] w-full cursor-pointer border-2"
      />
    </div>
    <div class="grid grid-cols-3 gap-1" v-if="allNewFeedDetail?.medias?.length === 3">
      <img :src="allNewFeedDetail.medias[0].url" alt="" class="col-span-2 h-full w-full cursor-pointer" />
      <div>
        <img
          :src="allNewFeedDetail.medias[1].url"
          alt=""
          class="object-content h-[140px] w-full cursor-pointer border-2"
        />
        <img
          :src="allNewFeedDetail.medias[2].url"
          alt=""
          class="object-content h-[140px] w-full cursor-pointer border-2"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-1" v-if="allNewFeedDetail?.medias?.length === 4">
      <img
        :src="allNewFeedDetail.medias[0].url"
        alt=""
        class="object-content h-[280px] w-full cursor-pointer border-2"
      />
      <img
        :src="allNewFeedDetail.medias[1].url"
        alt=""
        class="object-content h-[280px] w-full cursor-pointer border-2"
      />
      <img
        :src="allNewFeedDetail.medias[2].url"
        alt=""
        class="object-content h-[280px] w-full cursor-pointer border-2"
      />
      <img
        :src="allNewFeedDetail.medias[3].url"
        alt=""
        class="object-content h-[280px] w-full cursor-pointer border-2"
      />
    </div>
    <div class="grid grid-cols-6 gap-1" v-if="allNewFeedDetail?.medias?.length === 5">
      <div class="col-span-3">
        <img
          :src="allNewFeedDetail.medias[0].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="col-span-3">
        <img
          :src="allNewFeedDetail.medias[1].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="col-span-2">
        <img
          :src="allNewFeedDetail.medias[2].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="col-span-2">
        <img
          :src="allNewFeedDetail.medias[3].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="col-span-2">
        <img
          :src="allNewFeedDetail.medias[4].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
    </div>
    <div class="grid grid-cols-6 gap-1" v-if="allNewFeedDetail?.medias?.length === 6">
      <div class="col-span-3">
        <img
          :src="allNewFeedDetail.medias[0].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="col-span-3">
        <img
          :src="allNewFeedDetail.medias[1].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="col-span-2">
        <img
          :src="allNewFeedDetail.medias[2].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="col-span-2">
        <img
          :src="allNewFeedDetail.medias[3].url"
          alt=""
          class="object-content h-[280px] w-full cursor-pointer border-2"
        />
      </div>
      <div class="main relative col-span-2">
        <div class="-z-10 h-full w-full">
          <img
            :src="allNewFeedDetail.medias[4].url"
            alt=""
            class="object-content h-[280px] w-full cursor-pointer border-2"
          />
        </div>
        <div class="activeFull z-30 text-lg text-white"></div>
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
