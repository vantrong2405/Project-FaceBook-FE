<template>
  <div class="shadow-lg shadow-gray-100 grid grid-cols-3 px-4 py-1">
    <div class="flex items-center">
      <i class="fa-brands fa-facebook text-[#0866FF] text-4xl mr-5"></i>
      <div class="flex items-center border rounded-full p-2">
        <span><i class="fa-solid fa-magnifying-glass text-gray-500 mr-2"></i></span>
        <input type="text" class="outline-none font-normal" placeholder="Tìm kiếm trên facebook" />
      </div>
    </div>
    <div class="flex items-center product-items">
      <RouterLink to="/">
        <a href="#" class="text-dark hover:bg-[#cccccc6f] hover:rounded-md px-10 py-3">
          <i class="fa-solid fa-house text-[20px] text-[#606266]"></i>
        </a>
      </RouterLink>
      <RouterLink to="/video">
        <a href="#" class="text-dark hover:bg-[#cccccc6f] hover:rounded-md px-10 py-3">
          <i class="fa-brands fa-youtube text-[20px] text-[#606266]"></i>
        </a>
      </RouterLink>
      <RouterLink to="/market">
        <a href="#" class="text-dark hover:bg-[#cccccc6f] hover:rounded-md px-10 py-3"><i
            class="fa-solid fa-store text-[20px] text-[#606266]"></i></a>
      </RouterLink>

      <RouterLink to="/video">
        <a href="#" class="text-dark hover:bg-[#cccccc6f] hover:rounded-md px-10 py-3"><i
            class="fa-solid fa-user-group text-[20px] text-[#606266]"></i></a>
      </RouterLink>
      <RouterLink to="/video">
        <a href="#" class="text-dark hover:bg-[#cccccc6f] hover:rounded-md px-10 py-3"><i
            class="fa-solid fa-gamepad text-[20px] text-[#606266]"></i></a>
      </RouterLink>
    </div>
    <div class="flex items-center justify-end">
      <a href="#">
        <i
          class="fa-solid fa-bars text-[20px] ml-2 rounded-full border-solid border-2 border-white bg-[#D8DADF] hover:bg-[#c2c2c7] p-3"></i>
      </a>
      <a href="#">
        <i
          class="fa-brands fa-facebook-messenger text-[20px] ml-2 rounded-full border-solid border-2 border-white bg-[#D8DADF] hover:bg-[#c2c2c7] p-3"></i>
      </a>
      <a href="#">
        <i
          class="fa-solid fa-bell text-[20px] ml-2 rounded-full border-solid border-2 border-white bg-[#D8DADF] hover:bg-[#c2c2c7] p-3"></i>
      </a>
      <a href="#" class="w-[40px] h-[40px] overflow-hidden rounded-full ml-2 hover:bg-[#c2c2c7] avatar">
        <img
          src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/254126749_940952320167144_7907103038249429186_n.jpg?stp=c70.23.333.334a_cp0_dst-jpg_s60x60&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXUz2Sx3oChvsA219ofZBsSpj3YYANOOhKmPdhgA046L-MfgL9m14N_rt9E955NZgxwpBK0Beb4mBMITamBHhh&_nc_ohc=p44wDGH_5w4Ab5VfH8e&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDWMWJpsa3BH-OKSNXfz0NRcirkfVKgo8Jkhsiua-SFzw&oe=6626636E"
          alt="" class="" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.activeItems()
  },
  data() {
    return {}
  },
  methods: {
    activeItems() {
      const product_items = document.querySelectorAll('.product-items a')
      product_items.forEach((value, index) => {
        value.onclick = () => {
          // Xóa all active trừ phần tử hiện tại trừ active đang chọn
          product_items.forEach((item) => {
            if (item !== value) {
              item.classList.remove('active-tag')
              const icon = item.querySelector('i')
              if (icon) {
                icon.classList.remove('active-icon')
              }
            }
          })
          // Thêm class 'active' cho phần tử hiện tại
          value.classList.add('active-tag')
          const icon = value.querySelector('i')
          if (icon) {
            icon.classList.add('active-icon')
          }
        }
      })
    }
  }
}
</script>
<style></style>
