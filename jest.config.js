export default {
  transform: {
    '^.+\\.vue$': 'vue-jest',  // Biên dịch các file Vue
    '^.+\\.js$': 'babel-jest', // Biên dịch các file JavaScript
  },
  moduleFileExtensions: ['js', 'vue'],  // Các loại file mà Jest sẽ kiểm tra
  testMatch: ['**/src/tests/**/*.test.js'],  // Tìm các file test có phần mở rộng .test.js trong thư mục tests
};
