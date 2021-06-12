/*
 * @Author: your name
 * @Date: 2021-06-12 14:53:28
 * @LastEditTime: 2021-06-12 16:01:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hk-common/babel.config.js
 */
// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset',
//   ],
// }

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
