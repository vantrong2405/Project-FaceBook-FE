<template lang="">
 <div class="modal fade" id="modalDeleteCommment" tabindex="-1" aria-labelledby="modalCommentLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-2xl font-bold" id="modalCommentLabel">
              Xóa bình luận {{ valueCommentDetail?.user?.[0]?.name ?? "" }}
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="flex h-[100px] items-center rounded-md bg-yellow-500">
              <div class="w-[10%] text-center">
                <div
                  class="ml-[10px] flex h-[32px] w-[32px] items-center justify-center rounded-full border-[3px] border-black">
                  <i class="fa-solid fa-exclamation text-[20px] text-black"></i>
                </div>
              </div>
              <div class="ml-[10px]">
                <p class="text-[15px] font-medium text-red-500">Warning</p>
                <p class="text-[15px] text-black">
                  Bạn có muốn xóa bình luận
                  <b>{{ valueCommentDetail ? valueCommentDetail.content : "" }}</b> này không ?
                </p>
                <p class="text-[15px] text-black">
                  <span class="text-[15px] font-semibold text-black">Lưu ý: </span>Điều này không thể hoàn tác!
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
              @click="handleDeleteComment(valueCommentDetail)">
              Xóa ngay
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>