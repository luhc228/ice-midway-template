import { useMethod } from "../hook/useMethod";

type ContactInfo = {
  name: string;
  email: string;
  description?: string;
}

export async function getProfile() {
  return {
    name: 'ICE & Midway',
    birth: '10月21日, 2021',
    location: '中国 杭州',
    email: 'abc@foxmail.com',
    job: '软件工程师'
  }
}

export async function getDescription() {
  const description = `
   你好我叫 ICE & Midway。我是一个对各种 Web 技术充满热情的全栈 Web 开发者。我喜欢尝试不同的网络技术。
   我有3年以上的工作经验。我喜欢看和写关于技术堆栈的博客。查看我每周更新的博客，了解一些 Javascript 和一些关于 Web 技术笔记。
   目前我主要使用 Javascript 技术，如 React 和 NodeJS。我还拥有使用AWS/GCP等云基础设施的实践经验，并部署了应用程序，同时考虑到了可伸缩性。Docker、Kubernetes 和 Jenkins 是我用于CI/CD的一些很酷的工具。
  `;
  return description;
}

export async function contact(contactInfo: ContactInfo) {
  console.log('contactInfo: ', contactInfo);
  return {
    method: useMethod(),
  };
}
