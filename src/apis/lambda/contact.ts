import { useMethod } from "../hook/useMethod";

type ContactInfo = {
  name: string;
  email: string;
  description?: string;
}

export async function contact(contactInfo: ContactInfo) {
  console.log('contactInfo: ', contactInfo);
  return {
    method: useMethod(),
  };
}
