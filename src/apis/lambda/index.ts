export async function getProfile() {
  return {
    name: 'ICE x Midway',
    birth: '2021.10.21',
    location: '浙江·杭州',
    email: 'https://ice.work',
    job: '全栈工程师'
  }
}

export async function getDescription() {
  const description = `
    云端一体化应用开发将结合 ICE 与 Midway Node.js 框架，帮助客户接触和体验面向未来的云端一体研发模式。
   `;
  return description;
}
