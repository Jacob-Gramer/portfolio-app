import { MarkdownItem } from "./Markdown";


export interface Portfolio extends MarkdownItem {
  coverImage: string;
  employee: string;
  mainPage: string;
  employmentTime: number;
  highlights: string[];
  techStack: string[];
}