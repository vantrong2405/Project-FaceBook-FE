<template>
  <div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
      <div>
        <img src="../../assets-icon.png" class="logo-icon" alt="logo icon" />
      </div>
      <div>
        <h4 class="logo-text">Rukada</h4>
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i></div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
      <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
            <div class="parent-icon"><i class="bx bx-home-circle"></i></div>
            <div class="menu-title">Dashboard</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
            </li>
            <li>
              <a class="dropdown-item" href="index2.html"><i class="bx bx-right-arrow-alt"></i>Alternate</a>
            </li>
            <li>
              <a class="dropdown-item" href="index3.html"><i class="bx bx-right-arrow-alt"></i>Graphical</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link to="/admin/user">
            <a href="/admin/user" class="nav-link dropdown-toggle dropdown-toggle-nocaret">
              <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i></div>
              <div class="menu-title">Quản Lý Người Dùng</div>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import pathConstant from "@/views/client/constant/path.constant"
export default {
  data() {
    return {
      pathConstant: pathConstant
    }
  }
}
</script>
<style></style>
