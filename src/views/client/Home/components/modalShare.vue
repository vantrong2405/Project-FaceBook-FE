<template>
  <div class="modal fade" id="share_posts" tabindex="-1" aria-labelledby="create_post" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content relative">
        <p class="border-[rgba(0, 0, 0, 0.1)] border-b py-[14px] text-center text-[20px] font-bold text-black">
          Chia sẻ
        </p>
        <button type="button" class="btn-close absolute right-[3%] top-[3%]" data-bs-dismiss="modal"
          aria-label="Close"></button>
        <div class="modal-body">
          <div class="flex w-full">
            <a class="h-[40px] w-[40px] hover:brightness-90" href="">
              <img class="h-full w-full rounded-full" src="../../../../assets/images/png/default.png" alt="" />
            </a>
            <div class="ml-[10px]">
              <p class="text-[15px] font-medium text-black">Ân Nguyên</p>
              <div class="flex w-full">
                <p
                  class="mr-[5px] cursor-pointer rounded-md bg-[#E4E6EB] px-[7px] py-[4px] text-[13px] font-medium text-black">
                  Bảng feed
                </p>
                <div class="flex items-center justify-center">
                  <span class="flex cursor-pointer items-center justify-center rounded-md bg-[#E4E6EB]">
                    <select
                      class="ml-[5px] cursor-pointer rounded-md border-0 bg-[#E4E6EB] text-[15px] font-medium focus:ring-0"
                      name="" id="">
                      <option @click="showPrivate = false" value="1" selected>Công khai</option>
                      <option @click="showPrivate = true" value="2">Chỉ mình tôi</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <input class="w-full border-0 px-0 focus:outline-none focus:ring-0" type="text"
              placeholder="Hãy nói gì đó về nội dung này..." />
          </div>
          <div class="flex w-full items-center justify-end">
            <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
          </div>
          <div class="flex w-full items-center justify-end pt-[16px]">
            <button class="rounded-md bg-[#0866FF] px-[40px] py-[8px] font-medium text-white hover:bg-[#0861F2]">
              Chia sẻ ngay
            </button>
          </div>
        </div>
        <div class="modal-footer block">
          <p class="text-[17px] font-medium text-black">Gửi bằng Messenger</p>
          <div class="ml-[-5px] flex w-full">
            <template v-for="index in 5" :key="index">
              <div class="cursor-pointer rounded-lg px-[12px] py-[8px] hover:bg-[#F2F2F2]">
                <img class="mb-[5px] h-[60px] w-[60px] rounded-full"
                  src="https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
                  alt="" />
                <p class="max-w-[60px] break-words text-center text-[13px] truncateMenu text-black">Ân Nguyên</p>
              </div>
            </template>
          </div>
          <p class="text-[17px] font-medium text-black">Chia sẻ lên</p>
          <div class="ml-[-5px] flex w-full">
            <template v-for="index in 4" :key="index">
              <div class="w-[17%] cursor-pointer rounded-lg py-[8px] pb-[10px] hover:bg-[#F2F2F2]">
                <div
                  class="mx-auto mb-[10px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#D8DADF]">
                  <i class="fa-solid fa-people-group text-[24px]"></i>
                </div>
                <p class="max-w-full break-words text-center text-[13px] text-black">Nhóm</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
