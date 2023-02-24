import { PageLayout } from "components/layout";
import { Portfolio } from "interfaces/Portfolio";
import { getPortfolioBySlugWithMarkdown, getPortfolioSlugs } from "lib/portfolios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import Link from "next/link";

type Props = {
  portfolio: Portfolio;
}

const PortfolioDetail: NextPage<Props> = ({ portfolio }) => {

  return (
    <PageLayout pageTitle={portfolio.title}>
      <div className="pt-6">
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 sm:grid sm:max-w-7xl sm:grid-cols-3 sm:grid-rows-[auto,auto,1fr] sm:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className="flex">
              <span className="flex-initial">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl">{portfolio.title}
                </h1>
              </span>
              &nbsp;
              &nbsp;
              <span className="flex flex-1 align-middle">
                <Link href="https://github.com/orgs/RFC2207-Khazad-Dum/repositories" target="_blank" className="py-2">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-gray-300">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </span>


            </div>
            <div >
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900 dark:text-gray-300">{portfolio.description}</p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {portfolio.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900 dark:text-gray-300">Details</h2>
                <div className="mt-4 space-y-6">
                  <article className="text-sm text-gray-600 dark:text-gray-400">
                    <div dangerouslySetInnerHTML={{ __html: portfolio.content}} />
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-gray-300"><b>Technologies Used</b></h1>
            <ul>
              {portfolio.techStack.map((tech) =>
                <li key={tech} className="text-gray-400 py-2">
                  <span className="text-gray-600 dark:text-gray-400">{tech}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { slug } = context.params!;
  const portfolio = await getPortfolioBySlugWithMarkdown(slug);

  return {
    props: { portfolio }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getPortfolioSlugs();
  const paths = slugs.map(slug => ({params: {slug}}));

  return {
    paths,
    fallback: false
  }
}

export default PortfolioDetail;