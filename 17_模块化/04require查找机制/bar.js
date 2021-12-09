/**
 * node核心模块 直接返回核心模块 并且停止查找
 */

const fs = require("fs");

// fs.resolve();

/**
 * 路径
 *
 * 以./ ../ 开头的
 *
 * 将X当做一个文件在对应的目录下查找
 *
 * 如果有后缀名 则按后缀名的格式查找对应的文件
 * 如果没有后缀名 会按如下规则查找
 * 1. 直接查找文件X
 * 2. 查找X.js文件
 * 3. 查找JSON文件
 * 4. 查找X.node文件
 */

// 这个就是去abc文件夹下找abc的index文件
const a = require("./abc");
// console.log(a);

// 这个只会找到index文件
// const b = require("./zz");
// console.log(b);

/**
 * 不是路径和核心模块 查找机制
 *
 * 这个就会取决于我当前系统路径下 bode就会帮助我们查找这个路径下 有没有这个文件夹的信息
 *
 * 在真实场景下 就是找到下面express的index.js
 */

const express = require("express");

console.log(module);
