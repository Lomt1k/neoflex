import { z } from 'zod';
import { api } from './api';

export const HeadphonesSchema = z.object({ 
  id: z.number(),
  title: z.string(),
  img: z.string(),
  price: z.number(),
  rate: z.number(),
  wireless: z.boolean(),
});

export const HeadphonesArraySchema = z.array(HeadphonesSchema);

export type Headphones = z.infer<typeof HeadphonesSchema>;

export const fetchWiredHeadphones = async(): Promise<Headphones[]> => {
  const response = await api.get('/headphones?wireless=false');
  return HeadphonesArraySchema.parse(response.data);
}

export const fetchWirelessHeadphones = async(): Promise<Headphones[]> => {
  const response = await api.get('/headphones?wireless=true');
  return HeadphonesArraySchema.parse(response.data);
}