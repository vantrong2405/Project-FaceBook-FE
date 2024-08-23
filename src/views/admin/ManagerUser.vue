<template>
  <div>
    <div class="row mb-3">
      <div class="col-12 text-end">
        <button
          class="btn btn-success bg-[#1877F2] px-5 hover:bg-[#0886ff]"
          data-bs-toggle="modal"
          data-bs-target="#themMoiModal"
        >
          <b>Thêm Mới</b>
        </button>
      </div>
    </div>
    <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Tài Khoản</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="row">
                <div class="col-6">
                  <label class="form-label">Tên Tài Khoản</label
                  ><input type="text" class="form-control mb-3" placeholder="Nhập tên tài khoản" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="form-label">Địa chỉ</label
                  ><input type="number" class="form-control mb-3" placeholder="Địa chỉ" />
                </div>
                <div class="col-6">
                  <label class="form-label">Trạng Thái</label
                  ><select class="form-control mb-3">
                    <option value="0">Tạm Dừng</option>
                    <option value="1">Hiển Thị</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button
            ><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card" style="border-bottom: 5px solid #ab826b">
        <div class="card-header">
          <h4 class="mb-0 py-2 text-center align-middle"><b>Danh Sách Tài Khoản Người Dùng</b></h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table-bordered table">
              <thead>
                <tr>
                  <th class="text-nowrap bg-red-400 text-center align-middle text-[blue]">#</th>
                  <th class="text-nowrap bg-red-400 text-center align-middle text-[blue]">Tên tài khoản</th>
                  <th class="text-nowrap bg-red-400 text-center align-middle text-[blue]">Địa chỉ</th>
                  <th class="text-nowrap bg-red-400 text-center align-middle text-[blue]">Trạng Thái</th>
                  <th class="text-nowrap bg-red-400 text-center align-middle text-[blue]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="text-nowrap text-center align-middle">1</th>
                  <td class="text-nowrap align-middle">vantrong@gmail.com</td>
                  <td class="text-nowrap align-middle">Quảng Nam</td>
                  <td class="text-nowrap text-center align-middle">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-nowrap text-center align-middle">
                    <button
                      class="btn btn-primary me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                      style="width: 100px"
                    >
                      Cập Nhật</button
                    ><button
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                      style="width: 100px"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-nowrap text-center align-middle">2</th>
                  <td class="text-nowrap align-middle">annguyen@gmail.com</td>
                  <td class="text-nowrap align-middle">Đông Hà</td>
                  <td class="text-nowrap text-center align-middle">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-nowrap text-center align-middle">
                    <button
                      class="btn btn-primary me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                      style="width: 100px"
                    >
                      Cập Nhật</button
                    ><button
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                      style="width: 100px"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-nowrap text-center align-middle">3</th>
                  <td class="text-nowrap align-middle">nhatduong@gmail.com</td>
                  <td class="text-nowrap align-middle">Đà Nẵng</td>
                  <td class="text-nowrap text-center align-middle">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-nowrap text-center align-middle">
                    <button
                      class="btn btn-primary me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                      style="width: 100px"
                    >
                      Cập Nhật</button
                    ><button
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                      style="width: 100px"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-nowrap text-center align-middle">4</th>
                  <td class="text-nowrap align-middle">thienan@gmail.com</td>
                  <td class="text-nowrap align-middle">Hà Nội</td>
                  <td class="text-nowrap text-center align-middle">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-nowrap text-center align-middle">
                    <button
                      class="btn btn-primary me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                      style="width: 100px"
                    >
                      Cập Nhật</button
                    ><button
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                      style="width: 100px"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-nowrap text-center align-middle">5</th>
                  <td class="text-nowrap align-middle">ninh@gmail.com</td>
                  <td class="text-nowrap align-middle">Huế</td>
                  <td class="text-nowrap text-center align-middle">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-nowrap text-center align-middle">
                    <button
                      class="btn btn-primary me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                      style="width: 100px"
                    >
                      Cập Nhật</button
                    ><button
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                      style="width: 100px"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-nowrap text-center align-middle">7</th>
                  <td class="text-nowrap align-middle">ninh@gmail.com</td>
                  <td class="text-nowrap align-middle">Vinh</td>
                  <td class="text-nowrap text-center align-middle">
                    <button class="btn btn-success bg-[#1877F2] hover:bg-[#0886ff]" style="width: 100px">
                      Hiển Thị
                    </button>
                  </td>
                  <td class="text-center align-middle">
                    <button
                      class="btn btn-primary me-1"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                      style="width: 100px"
                    >
                      Cập Nhật</button
                    ><button
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                      style="width: 100px"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="modal fade"
            id="capNhatModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Tài Khoản</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12">
                      <label class="form-label">Tên Tài Khoản</label
                      ><input type="text" class="form-control" placeholder="Nhập tên Tài Khoản" />
                    </div>

                    <div class="col-12">
                      <label class="form-label mt-3">Địa chỉ</label
                      ><input type="text" class="form-control" placeholder="Nhập Địa chỉ" />
                    </div>
                    <div class="col-12">
                      <label class="form-label mt-3">Trạng Thái</label
                      ><select class="form-control">
                        <option value="1">Tạm dừng</option>
                        <option value="0">Hiển thị</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button
                  ><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Tài Khoản</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="alert alert-warning bg-warning alert-dismissible fade show border-0 py-2">
                    <div class="d-flex align-items-center">
                      <div class="font-35 text-dark"><i class="bx bx-info-circle"></i></div>
                      <div class="ms-3">
                        <h6 class="text-dark mb-0">Warning</h6>
                        <div class="text-dark">
                          <p>Bạn có muốn xóa <b>Tài Khoản</b> này không?</p>
                          <p><b>Lưu ý:</b> Điều này không thể hoàn tác!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button
                  ><button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
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
