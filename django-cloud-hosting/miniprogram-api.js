/**
 * 微信小程序 - Django计数器API调用示例
 *
 * 环境信息：
 * - AppID: wx08301b3cb660e7ee
 * - 环境名称: prod-8gzcmg9d2da78ad2
 * - 服务名称: django-51zq
 * - 域名: https://django-51zq-222351-8-1400518621.sh.run.tcloudbase.com
 */

// 配置
const CONFIG = {
  env: 'prod-8gzcmg9d2da78ad2',
  service: 'django-51zq',
  baseURL: '/api/count'
};

/**
 * 增加计数
 * @param {string} key - 计数器键名
 * @returns {Promise}
 */
function increment(key = 'default') {
  return wx.cloud.callContainer({
    config: { env: CONFIG.env },
    path: CONFIG.baseURL,
    header: {
      'X-WX-SERVICE': CONFIG.service,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: {
      action: 'inc',
      key: key
    }
  });
}

/**
 * 减少计数
 * @param {string} key - 计数器键名
 * @returns {Promise}
 */
function decrement(key = 'default') {
  return wx.cloud.callContainer({
    config: { env: CONFIG.env },
    path: CONFIG.baseURL,
    header: {
      'X-WX-SERVICE': CONFIG.service,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: {
      action: 'dec',
      key: key
    }
  });
}

/**
 * 获取计数
 * @param {string} key - 计数器键名
 * @returns {Promise}
 */
function get(key = 'default') {
  return wx.cloud.callContainer({
    config: { env: CONFIG.env },
    path: CONFIG.baseURL,
    header: {
      'X-WX-SERVICE': CONFIG.service
    },
    method: 'GET',
    data: {
      action: 'get',
      key: key
    }
  });
}

/**
 * 重置计数
 * @param {string} key - 计数器键名
 * @returns {Promise}
 */
function reset(key = 'default') {
  return wx.cloud.callContainer({
    config: { env: CONFIG.env },
    path: CONFIG.baseURL,
    header: {
      'X-WX-SERVICE': CONFIG.service,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: {
      action: 'reset',
      key: key
    }
  });
}

/**
 * 设置指定值
 * @param {string} key - 计数器键名
 * @param {number} value - 要设置的值
 * @returns {Promise}
 */
function set(key, value) {
  return wx.cloud.callContainer({
    config: { env: CONFIG.env },
    path: CONFIG.baseURL,
    header: {
      'X-WX-SERVICE': CONFIG.service,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: {
      action: 'set',
      key: key,
      value: value
    }
  });
}

/**
 * 封装的计数器类（推荐使用）
 */
class CounterAPI {
  constructor(key = 'default') {
    this.key = key;
  }

  // 增加计数
  inc() {
    return increment(this.key);
  }

  // 减少计数
  dec() {
    return decrement(this.key);
  }

  // 获取计数
  get() {
    return get(this.key);
  }

  // 重置计数
  reset() {
    return reset(this.key);
  }

  // 设置值
  set(value) {
    return set(this.key, value);
  }
}

// 导出
module.exports = {
  increment,
  decrement,
  get,
  reset,
  set,
  CounterAPI
};

/**
 * ============================================
 * 使用示例
 * ============================================
 */

/**
 * 示例1：页面访问计数
 */
// function trackPageView(pageName) {
//   const counter = new CounterAPI(`page_${pageName}`);
//   counter.inc().then(res => {
//     console.log(`页面 ${pageName} 访问次数:`, res.data.data.value);
//   }).catch(err => {
//     console.error('计数失败:', err);
//   });
// }
//
// // 在页面onLoad中调用
// Page({
//   onLoad() {
//     trackPageView('index');
//   }
// });

/**
 * 示例2：点赞功能
 */
// function handleLike(postId) {
//   const counter = new CounterAPI(`post_${postId}_likes`);
//   counter.inc().then(res => {
//     const likeCount = res.data.data.value;
//     this.setData({ likeCount });
//     wx.showToast({
//       title: `点赞成功！${likeCount}人点赞`,
//       icon: 'success'
//     });
//   }).catch(err => {
//     wx.showToast({
//       title: '操作失败',
//       icon: 'none'
//     });
//   });
// }

/**
 * 示例3：游戏分数
 */
// function saveHighScore(score) {
//   const counter = new CounterAPI(`user_${getApp().globalData.userId}_highscore`);
//   counter.set(score).then(res => {
//     console.log('最高分已更新:', res.data.data.value);
//   });
// }
//
// function getHighScore() {
//   const counter = new CounterAPI(`user_${getApp().globalData.userId}_highscore`);
//   counter.get().then(res => {
//     const highScore = res.data.data.value;
//     this.setData({ highScore });
//   });
// }

/**
 * 示例4：太阳系游戏 - 完成次数统计
 */
// function trackCompletion(gameName) {
//   const counter = new CounterAPI(`game_${gameName}_completions`);
//   counter.inc().then(res => {
//     const count = res.data.data.value;
//     console.log(`${gameName} 完成次数:`, count);
//     // 可以显示在游戏结束页面
//   });
// }
//
// // 太阳系游戏完成后调用
// function onGameComplete() {
//   trackCompletion('solar_system');
//
//   // 同时记录全局完成次数
//   increment('total_completions').then(res => {
//     console.log('总完成次数:', res.data.data.value);
//   });
// }

/**
 * 示例5：批量获取多个计数器
 */
// function getMultipleCounters() {
//   Promise.all([
//     get('page_views'),
//     get('total_completions'),
//     get('active_users')
//   ]).then(([views, completions, users]) => {
//     this.setData({
//       pageViews: views.data.data.value,
//       totalCompletions: completions.data.data.value,
//       activeUsers: users.data.data.value
//     });
//   });
// }

/**
 * 示例6：实时显示计数（轮询）
 */
// function startRealtimeCounter(key, callback, interval = 2000) {
//   const counter = new CounterAPI(key);
//
//   const poll = () => {
//     counter.get().then(res => {
//       callback(res.data.data.value);
//     }).catch(err => {
//       console.error('获取计数失败:', err);
//     });
//   };
//
//   poll();
//   return setInterval(poll, interval);
// }
//
// // 使用
// let timer = startRealtimeCounter('live_viewers', (count) => {
//   this.setData({ liveViewers: count });
// });
//
// // 停止轮询
// // clearInterval(timer);

/**
 * 示例7：错误处理和重试
 */
// async function incrementWithRetry(key, maxRetries = 3) {
//   const counter = new CounterAPI(key);
//
//   for (let i = 0; i < maxRetries; i++) {
//     try {
//       const res = await counter.inc();
//       return res.data.data.value;
//     } catch (err) {
//       console.warn(`第${i + 1}次尝试失败:`, err);
//       if (i === maxRetries - 1) {
//         throw err;
//       }
//       // 等待1秒后重试
//       await new Promise(resolve => setTimeout(resolve, 1000));
//     }
//   }
// }
