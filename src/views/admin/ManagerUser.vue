<template>
  <div>
    <div class="row mb-3">
      <div class="col-12 text-end">
        <button class="btn btn-success px-5 bg-[#1877F2]  hover:bg-[#0886ff]" data-bs-toggle="modal"
          data-bs-target="#themMoiModal">
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
                  <label class="form-label">Tên Tài Khoản</label><input type="text" class="form-control mb-3"
                    placeholder="Nhập tên tài khoản" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label class="form-label">Địa chỉ</label><input type="number" class="form-control mb-3"
                    placeholder="Địa chỉ" />
                </div>
                <div class="col-6">
                  <label class="form-label">Trạng Thái</label><select class="form-control mb-3">
                    <option value="0">Tạm Dừng</option>
                    <option value="1">Hiển Thị</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button><button type="button"
              class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card" style="border-bottom: 5px solid #ab826b">
        <div class="card-header">
          <h4 class="mb-0 text-center align-middle py-2"><b>Danh Sách Tài Khoản Người Dùng</b></h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="bg-red-400 text-[blue] text-center align-middle text-nowrap">#</th>
                  <th class="bg-red-400 text-[blue] text-center align-middle text-nowrap">
                    Tên tài khoản
                  </th>
                  <th class="bg-red-400 text-[blue] text-center align-middle text-nowrap">
                    Địa chỉ
                  </th>
                  <th class="bg-red-400 text-[blue] text-center align-middle text-nowrap">
                    Trạng Thái
                  </th>
                  <th class="bg-red-400 text-[blue] text-center align-middle text-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="text-center align-middle text-nowrap">1</th>
                  <td class="align-middle text-nowrap">vantrong@gmail.com</td>
                  <td class="align-middle text-nowrap">Quảng Nam</td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal"
                      style="width: 100px">
                      Cập Nhật</button><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                      style="width: 100px">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-center align-middle text-nowrap">2</th>
                  <td class="align-middle text-nowrap">annguyen@gmail.com</td>
                  <td class="align-middle text-nowrap">Đông Hà</td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal"
                      style="width: 100px">
                      Cập Nhật</button><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                      style="width: 100px">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-center align-middle text-nowrap">3</th>
                  <td class="align-middle text-nowrap">nhatduong@gmail.com</td>
                  <td class="align-middle text-nowrap">Đà Nẵng</td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal"
                      style="width: 100px">
                      Cập Nhật</button><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                      style="width: 100px">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-center align-middle text-nowrap">4</th>
                  <td class="align-middle text-nowrap">thienan@gmail.com</td>
                  <td class="align-middle text-nowrap">Hà Nội</td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal"
                      style="width: 100px">
                      Cập Nhật</button><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                      style="width: 100px">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-center align-middle text-nowrap">5</th>
                  <td class="align-middle text-nowrap">ninh@gmail.com</td>
                  <td class="align-middle text-nowrap">Huế</td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-danger" style="width: 100px">Tạm Dừng</button>
                  </td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal"
                      style="width: 100px">
                      Cập Nhật</button><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                      style="width: 100px">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th class="text-center align-middle text-nowrap">7</th>
                  <td class="align-middle text-nowrap">ninh@gmail.com</td>
                  <td class="align-middle text-nowrap">Vinh</td>
                  <td class="text-center align-middle text-nowrap">
                    <button class="btn btn-success bg-[#1877F2]  hover:bg-[#0886ff] " style="width: 100px">Hiển
                      Thị</button>
                  </td>
                  <td class="text-center align-middle">
                    <button class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#capNhatModal"
                      style="width: 100px">
                      Cập Nhật</button><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaModal"
                      style="width: 100px">
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Tài Khoản</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-12">
                      <label class="form-label">Tên Tài Khoản</label><input type="text" class="form-control"
                        placeholder="Nhập tên Tài Khoản" />
                    </div>

                    <div class="col-12">
                      <label class="form-label mt-3">Địa chỉ</label><input type="text" class="form-control"
                        placeholder="Nhập Địa chỉ" />
                    </div>
                    <div class="col-12">
                      <label class="form-label mt-3">Trạng Thái</label><select class="form-control">
                        <option value="1">Tạm dừng</option>
                        <option value="0">Hiển thị</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close</button><button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                    Cập Nhật
                  </button>
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
                  <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                    <div class="d-flex align-items-center">
                      <div class="font-35 text-dark"><i class="bx bx-info-circle"></i></div>
                      <div class="ms-3">
                        <h6 class="mb-0 text-dark">Warning</h6>
                        <div class="text-dark">
                          <p>Bạn có muốn xóa <b>Tài Khoản</b> này không?</p>
                          <p><b>Lưu ý:</b> Điều này không thể hoàn tác!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close</button><button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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
