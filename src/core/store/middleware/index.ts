// Phần mềm trung gian thu nhỏ cho Redux. Nó cho phép viết các hàm với logic bên trong có thể tương tác
// với các phương thức getState và công văn của cửa hàng Redux.
// Thunk middleware for Redux. It allows writing functions with logic
// inside that can interact with a Redux store's dispatch and getState methods.
import thunkMiddleware from 'redux-thunk';

// define store middlewares as an array
// mặc định mình cần dùng trong createStore là mảng và có thể them các middleware khác
export default [thunkMiddleware];
