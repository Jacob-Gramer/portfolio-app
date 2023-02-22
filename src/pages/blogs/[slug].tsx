import { Blog } from 'interfaces/Blog';
import { getBlogBySlugWithMarkdown, getBlogsSlugs } from 'lib/blogs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PageLayout } from '../../../components/layout/';
import { BlogHeader } from 'components/blogs';

interface Props {
  blog: Blog
}

const BlogDetail: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <PageLayout pageTitle={blog.title}>
        <div className="w-2/3 m-auto dark:text-gray-400">
          <BlogHeader blog={blog}/>
          <article className="prose dark:prose-headings:text-gray-300 dark:prose-a:text-gray-300
          dark:prose-strong:text-gray-300
          dark:prose-code:text-gray-300
          dark:prose-p:text-gray-300  markdown-image-50 dark:text-gray-400">
            {/* Blog Content Here */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }} className="dark:text-gray-400"/>
          </article>
        </div>
      </PageLayout>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { slug } = context.params!;
  const blog = await getBlogBySlugWithMarkdown(slug);

  return {
    props: { blog }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getBlogsSlugs();
  const paths = slugs.map(slug => ({params: {slug}}));

  return {
    paths,
    fallback: false
  }
}

export default BlogDetail;
