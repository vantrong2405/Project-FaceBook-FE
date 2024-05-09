<template>
    <div class="w-full">
        <div>
            <p class="text-[24px] font-bold">Đã chơi gần đây</p>
            <div id="animation-carousel" class="relative">
                <div>
                </div>
                <div class="py-[16px]">
                    <div class=" flex  ">
                        <div
                            class="dachoiganday mr-[8px] w-[12%] min-w-[125px] max-w-[150px] h-auto relative hover:brightness-90 cursor-pointer shadow-md">
                            <img class="h-full w-full rounded-lg"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                                alt="">
                            <p
                                class="absolute text-[17px] bottom-[12px] left-[12px] text-white h-[40px] font-[600] leading-[20px]">
                                Words With <br> Friends</p>
                        </div>
                        <div
                            class="dachoiganday mr-[8px] w-[12%] min-w-[125px] max-w-[150px] h-auto relative hover:brightness-90 cursor-pointer shadow-md">
                            <img class="h-full w-full rounded-lg"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                                alt="">
                            <p
                                class="absolute text-[17px] bottom-[12px] left-[12px] text-white h-[40px] font-[600] leading-[20px]">
                                Words With <br> Friends</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p class="text-[24px] font-bold">Game chúng tôi thích</p>
            <div id="animation-carousel" class="relative">
                <div class="py-[16px]">
                    <div class=" flex flex-row h-full">
                        <div
                            class="dachoiganday container mr-[8px] w-[220px] h-[200px] min-w-[180px] max-w-[250px] relative hover:brightness-90 cursor-pointer">
                            <div class="w-full h-full flex flex-col rounded-lg overflow-hidden">
                                <div class="w-full h-[62%]">
                                    <img class="w-full h-full object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                                        alt="">
                                </div>
                                <div class="w-full h-[38%] relative">
                                    <img class="w-full h-full object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                                        alt="">
                                    <div class="w-full h-full backdrop-blur-xl bg-black bg-opacity-10 absolute top-0">
                                        <div class="mt-[6px] ml-[8px]">
                                            <p class="text-white text-[17px] font-medium ">Solitarie Classic
                                            </p>
                                            <p
                                                class="text-white text-[13px] font-medium inline-block bg-[#203820] py-[4px] px-[6px] mt-[5px] rounded-2xl">
                                                2,2 triệu người chơi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="dachoiganday container mr-[8px] w-[220px] h-[200px] min-w-[180px] max-w-[250px] relative hover:brightness-90 cursor-pointer">
                            <div class="w-full h-full flex flex-col rounded-lg overflow-hidden">
                                <div class="w-full h-[62%]">
                                    <img class="w-full h-full object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                                        alt="">
                                </div>
                                <div class="w-full h-[38%] relative">
                                    <img class="w-full h-full object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj8Kr9gKhzEDl0wZRJ-u_DmqO6Fr_ZwwnuD9oulC3Ww&s"
                                        alt="">
                                    <div class="w-full h-full backdrop-blur-xl bg-black bg-opacity-10 absolute top-0">
                                        <div class="mt-[6px] ml-[8px]">
                                            <p class="text-white text-[17px] font-medium ">Solitarie Classic
                                            </p>
                                            <p
                                                class="text-white text-[13px] font-medium inline-block bg-[#203820] py-[4px] px-[6px] mt-[5px] rounded-2xl">
                                                2,2 triệu người chơi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sss">
            <swiper :slidesPerView="6" :spaceBetween="30" :pagination="{
                clickable: true,
            }" class=" mySwiper block">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
            </swiper>
        </div>
    </div>


</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
<style></style>