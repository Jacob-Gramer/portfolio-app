import type { GetStaticProps, NextPage } from 'next';
import { BlogList } from 'components/blogs';
import { PortfolioList } from 'components/portfolios/';
import Link from "next/link";
import { BaseLayout } from 'components/layout';
import { getBlogs } from 'lib/blogs';
import { Blog } from 'interfaces/Blog';
import { saveSearchData } from 'lib/md';
import { getPortfolios } from 'lib/portfolios';

interface Props {
  blogs: Blog[]
}

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <BaseLayout>
      <h2
        className="text-2xl font-bold tracking-tight text-gray-900">
          Newest Blogs
          <Link legacyBehavior href="/blogs">
            <a className='text-sm ml-1 text-indigo-600'>
              (See All)
            </a>
          </Link>
      </h2>
      <BlogList blogs={blogs}/>
      <br></br>
      <h2
        className="text-2xl font-bold tracking-tight text-gray-900">
          Portfolios
          <Link legacyBehavior href="/portfolios">
            <a className='text-sm ml-1 text-indigo-600'>
              (See All)
            </a>
          </Link>
      </h2>
      <PortfolioList />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  // getBlogFileNames
  const blogs = getBlogs();
  const portfolios = getPortfolios();

  console.log(portfolios);

  saveSearchData(blogs);

  return {
    props: { blogs }
  }
}

export default Home