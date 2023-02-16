import { Blog } from "interfaces/Blog";
import { join } from "path";
import { getAllItems, getDir, getFileNames, getItemInPath } from "./md";

const BLOG_DIR = getDir("/content/blogs");

const getBlogFileNames = () => {
    return getFileNames(BLOG_DIR);
};

const getBlog = (fileName: string): Blog => {
    const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog;
    blog.slug = fileName.replace(/\.md$/, '');
    return blog;
};

const getBlogs = (): Blog[] => {
    const names = getBlogFileNames();
    return getAllItems(names, getBlog) as Blog[];
};

export {
  getBlog,
  getBlogs,
  getBlogFileNames
};