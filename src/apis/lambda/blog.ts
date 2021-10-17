export async function getBlogs() {
  return [
    {
      title: "React 17 有什么新特性？",
      date: '2020-12-24',
      cover: 'https://img.alicdn.com/imgextra/i2/O1CN01mdxYax1jKKUmjgU5S_!!6000000004529-2-tps-1600-900.png',
      excerpt: '在本文中，我们将讨论React v17.0在2020年10月20日发布的新升级。React 17没有添加新的开发功能，只是添加了向后兼容性的功能'
    },
    {
      title: "剖析 React 代码分割原理",
      date: '2020-12-23',
      cover: 'https://img.alicdn.com/imgextra/i3/O1CN01KC7Yf61f1JaP7K9xt_!!6000000003946-2-tps-900-492.png',
      excerpt: '假设项目的包大小非常大，并且不希望在初始渲染期间一次加载所有内容，那么可以使用代码拆分和React来提高应用程序的性能和加载时间。'
    },
  ]
}