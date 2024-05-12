<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class='bx bx-home-circle'></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li> <a class="dropdown-item" href="index.html"><i class="bx bx-right-arrow-alt"></i>Default</a>
                        </li>
                        <li> <a class="dropdown-item" href="index2.html"><i
                                    class="bx bx-right-arrow-alt"></i>Alternate</a>
                        </li>
                        <li> <a class="dropdown-item" href="index3.html"><i
                                    class="bx bx-right-arrow-alt"></i>Graphical</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-plate-wheat"></i>
                        </div>
                        <div class="menu-title">Quản lý người dùng</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Quản lý bài viết
                                </a>
                            </router-link>
                        </li>
                        <router-link to="#">
                            <a class="dropdown-item" href="#">
                                <i class="bx bx-right-arrow-alt"></i>Món Ăn
                            </a>
                        </router-link>
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Danh Mục Món Ăn
                                </a>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                        <div class="menu-title">Quản lý bài viết</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Nhập Kho
                                </a>
                            </router-link>
                        </li>
                        <router-link to="#">
                            <a class="dropdown-item" href="#">
                                <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Nhập Kho
                            </a>
                        </router-link>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                        <div class="menu-title">Quản Lý Bán Hàng</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Sử Dụng Dịch Vụ
                                </a>
                            </router-link>
                        </li>
                        <router-link to="#">
                            <a class="dropdown-item" href="#">
                                <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Bán Hàng
                            </a>
                        </router-link>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                        <div class="menu-title">Quản Lý Video</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Sử Dụng Dịch Vụ
                                </a>
                            </router-link>
                        </li>
                        <router-link to="#">
                            <a class="dropdown-item" href="#">
                                <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Bán Hàng
                            </a>
                        </router-link>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                        <div class="menu-title">Quản Lý Group</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Sử Dụng Dịch Vụ
                                </a>
                            </router-link>
                        </li>
                        <router-link to="#">
                            <a class="dropdown-item" href="#">
                                <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Bán Hàng
                            </a>
                        </router-link>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                        <div class="menu-title">Quản Lý Quảng cáo</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Sử Dụng Dịch Vụ
                                </a>
                            </router-link>
                        </li>
                        <router-link to="#">
                            <a class="dropdown-item" href="#">
                                <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Bán Hàng
                            </a>
                        </router-link>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                        <div class="menu-title">Quản Lý Trò chơi</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="#">
                                <a class="dropdown-item" href="#">
                                    <i class="bx bx-right-arrow-alt"></i>Sử Dụng Dịch Vụ
                                </a>
                            </router-link>
                        </li>
                        <router-link to="#">
                            <a class="dropdown-item" href="#">
                                <i class="bx bx-right-arrow-alt"></i>Hóa Đơn Bán Hàng
                            </a>
                        </router-link>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>