export async function getProfile() {
  return {
    name: '你的名字',
    birth: '',
    location: '',
    email: '',
    job: ''
  }
}

export async function getDescription() {
  const description = `
    个人简介待补充
   `;
  return description;
}
