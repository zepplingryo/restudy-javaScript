import { time1, time2 } from "./time.js";
import { fun1, fun2 } from "./util.js";

export { time1, time2, fun1, fun2 };

/**
 * 导出管道 在当前文件中拿到time1, time2两个文件 然后直接进行导出
 */

// export { time1, time2 } from "./time.js";
// export { fun1, fun2 } from "./util.js";

/**
 * 导出全部 在针对于第三方库封装时会用到
 */
export * from "./util.js";
export * from "./time.js";
