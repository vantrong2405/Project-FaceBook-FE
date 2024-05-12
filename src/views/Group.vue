<template>
  <div class="flex">
    <div class="flex">
      <div class="w-80 hidden xl:block">
        <div class="w-80">
          <div class="fixed">
            <div class="h-screen px-2 py-4 flex-col justify-between hidden xl:flex overflow-scroll">
              <div id="left-bar-top" class="w-full">
                <ul>
                  <li class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">Video</h1>
                    <Settings />
                  </li>
                  <li>
                    <div class="w-72 h-14 py-2 flex items-center">
                      <div class="__logo"></div>
                      <div
                        class="h-9 flex items-center justify-center rounded-full cursor-pointer transition-opacity duration-500"
                      ></div>
                      <div
                        class="w-10 flex items-center justify-center h-full bg-gray-100 rounded-full overflow-hidden cursor-pointer xl:flex-1 xl:px-4 xl:cursor-text ml-1 sm:m-0"
                      >
                        <svg-search class="w-5" fill="currentColor" />
                        <input
                          class="w-full h-full bg-transparent text-sm px-2 border-none outline-none xl:block focus:outline-none focus:ring-transparent"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900"
                  >
                    <MonitorPlay class="rounded-full" />
                    <span class="font-semibold text-tiny">Trang chủ</span>
                  </li>
                  <li
                    class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900"
                  >
                    <Tv2 class="rounded-full" />
                    <span class="font-semibold text-tiny">Trực tiếp</span>
                  </li>
                  <li
                    class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900"
                  >
                    <Film class="rounded-full" />
                    <span class="font-semibold text-tiny">Reels</span>
                  </li>
                  <li
                    class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900"
                  >
                    <Clapperboard class="rounded-full" />
                    <span class="font-semibold text-tiny">Chương trình</span>
                  </li>
                  <li
                    class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900"
                  >
                    <Rocket class="rounded-full" />
                    <span class="font-semibold text-tiny">Khám phá</span>
                  </li>
                  <li
                    class="flex items-center gap-2 px-3 py-2 w-full cursor-pointer rounded-lg hover:bg-myGray-900"
                  >
                    <Save class="rounded-full" />
                    <span class="font-semibold text-tiny">Video đã lưu</span>
                  </li>
                </ul>

                <!-- end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
S
