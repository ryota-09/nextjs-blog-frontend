import { Content } from "./content";

export type Article = {
  id: number;
  title: string;
  summary: string;
  imgPath: string;
  createdAt: string;
  updatedAt: string;
  body: Content[];
};
