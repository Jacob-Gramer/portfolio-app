import type { GetStaticProps, NextPage } from 'next';
import { BlogList } from 'components/blogs';
import { PortfolioList } from 'components/portfolios/';
import Link from "next/link";
import { BaseLayout } from 'components/layout';
import { getBlog, getBlogFileNames } from 'lib/md';

const Home: NextPage = () => {
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
      <BlogList />
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
  const blogFileNames = getBlogFileNames();
  blogFileNames.forEach((file) => {
    // getBlog
    const blogContent = getBlog(file);
    console.log(blogContent)
  })

  return {
    props: {}
  }
}

export default Home