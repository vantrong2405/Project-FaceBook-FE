<template>
    <div class="modal fade" id="share_posts" tabindex="-1" aria-labelledby="create_post" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content relative">
                <p class="text-center py-[14px] text-black text-[20px] font-bold border-b border-[rgba(0, 0, 0, 0.1)]">
                    Chia sẻ
                </p>
                <button type="button" class="btn-close absolute top-[3%] right-[3%]" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                <div class="modal-body">
                    <div class="w-full flex">
                        <a class="w-[40px] h-[40px] hover:brightness-90" href="">
                            <img class="w-full h-full rounded-full"
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=c0.2.200.200a_dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYBFPsf8BS-VIw3-Z8E96YN00GSPXOvNyYMm5GvieB4ICA&oe=6647C7E6"
                                alt="" />
                        </a>
                        <div class="ml-[10px]">
                            <p class="text-[15px] font-medium text-black">Ân Nguyên</p>
                            <div class="w-full flex">
                                <p
                                    class="text-[13px] text-black font-medium py-[4px] px-[7px] cursor-pointer rounded-md bg-[#E4E6EB] mr-[5px]">
                                    Bảng feed
                                </p>
                                <div class="flex justify-center items-center">
                                    <span
                                        class="bg-[#E4E6EB] rounded-md flex items-center justify-center cursor-pointer">
                                        <select
                                            class="border-0 focus:ring-0 ml-[5px] text-[15px] font-medium bg-[#E4E6EB] rounded-md cursor-pointer"
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
                    <div class="w-full flex items-center justify-end">
                        <i class="fa-regular fa-face-smile cursor-pointer text-[26px] text-gray-500"></i>
                    </div>
                    <div class="w-full flex items-center justify-end pt-[16px]">
                        <button
                            class="py-[8px] px-[40px] bg-[#0866FF] hover:bg-[#0861F2] text-white font-medium rounded-md">
                            Chia sẻ ngay
                        </button>
                    </div>
                </div>
                <div class="modal-footer block">
                    <p class="text-[17px] text-black font-medium">Gửi bằng Messenger</p>
                    <div class="w-full flex ml-[-5px]">
                        <div class="py-[8px] px-[12px] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <img class="h-[60px] w-[60px] rounded-full mb-[5px]"
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCitaCAQew6JR7FAxGejNlqj2pfKasvFlbcgyCuRtm7wg&oe=6647C7E6"
                                alt="" />
                            <p class="text-[13px] text-black max-w-[60px] break-words text-center">Ân Nguyên</p>
                        </div>
                        <div class="py-[8px] px-[12px] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <img class="h-[60px] w-[60px] rounded-full mb-[5px]"
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCitaCAQew6JR7FAxGejNlqj2pfKasvFlbcgyCuRtm7wg&oe=6647C7E6"
                                alt="" />
                            <p class="text-[13px] text-black max-w-[60px] break-words text-center">Ân Nguyên</p>
                        </div>
                        <div class="py-[8px] px-[12px] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <img class="h-[60px] w-[60px] rounded-full mb-[5px]"
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCitaCAQew6JR7FAxGejNlqj2pfKasvFlbcgyCuRtm7wg&oe=6647C7E6"
                                alt="" />
                            <p class="text-[13px] text-black max-w-[60px] break-words text-center">Ân Nguyên</p>
                        </div>
                        <div class="py-[8px] px-[12px] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <img class="h-[60px] w-[60px] rounded-full mb-[5px]"
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCitaCAQew6JR7FAxGejNlqj2pfKasvFlbcgyCuRtm7wg&oe=6647C7E6"
                                alt="" />
                            <p class="text-[13px] text-black max-w-[60px] break-words text-center">Ân Nguyên</p>
                        </div>
                        <div class="py-[8px] px-[12px] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <img class="h-[60px] w-[60px] rounded-full mb-[5px]"
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/274456074_1361142244327596_3675729695510261208_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu3DE5x6dR9PxFQ-LK28vEDbjtZrkb4vQNuO1muRvi9Ih5x7QFRzr-YV0Ly3szC91MQcW0YX-b2uUdFa-mQrif&_nc_ohc=Qt8QiDFGOAcQ7kNvgEg42rk&_nc_ht=scontent.fdad3-6.fna&oh=00_AYCitaCAQew6JR7FAxGejNlqj2pfKasvFlbcgyCuRtm7wg&oe=6647C7E6"
                                alt="" />
                            <p class="text-[13px] text-black max-w-[60px] break-words text-center">Ân Nguyên</p>
                        </div>
                    </div>
                    <p class="text-[17px] text-black font-medium">Chia sẻ lên</p>
                    <div class="w-full flex ml-[-5px]">
                        <div class="py-[8px] pb-[10px] w-[17%] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <div
                                class="h-[60px] w-[60px] mb-[10px] mx-auto flex items-center justify-center rounded-full bg-[#D8DADF]">
                                <i class="fa-brands fa-facebook-messenger text-[32px]"></i>
                            </div>
                            <p class="text-[13px] text-black max-w-full text-center break-words">Messenger</p>
                        </div>
                        <div class="py-[8px] pb-[10px] w-[17%] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <div
                                class="h-[60px] w-[60px] mb-[10px] mx-auto flex items-center justify-center rounded-full bg-[#D8DADF]">
                                <i class="fa-brands fa-whatsapp text-[32px]"></i>
                            </div>
                            <p class="text-[13px] text-black max-w-full text-center break-words">Whatsapp</p>
                        </div>
                        <div class="py-[8px] pb-[10px] w-[17%] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <div
                                class="h-[60px] w-[60px] mb-[10px] mx-auto flex items-center justify-center rounded-full bg-[#D8DADF]">
                                <i class="fa-solid fa-book-open text-[24px]"></i>
                            </div>
                            <p class="text-[13px] text-black max-w-full text-center break-words">Tin của bạn</p>
                        </div>
                        <div class="py-[8px] pb-[10px] w-[17%] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <div
                                class="h-[60px] w-[60px] mb-[10px] mx-auto flex items-center justify-center rounded-full bg-[#D8DADF]">
                                <i class="fa-solid fa-link text-[24px]"></i>
                            </div>
                            <p class="text-[13px] text-black max-w-full text-center break-words">
                                Sao chép liên kết
                            </p>
                        </div>
                        <div class="py-[8px] pb-[10px] w-[17%] hover:bg-[#F2F2F2] rounded-lg cursor-pointer">
                            <div
                                class="h-[60px] w-[60px] mb-[10px] mx-auto flex items-center justify-center rounded-full bg-[#D8DADF]">
                                <i class="fa-solid fa-people-group text-[24px]"></i>
                            </div>
                            <p class="text-[13px] text-black max-w-full text-center break-words">Nhóm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>