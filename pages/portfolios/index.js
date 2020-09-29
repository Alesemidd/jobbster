import AppPagination from "@/components/shared/Pagination";
import { useGetPortfolios } from "@/apollo/actions";
import BaseLayout from "@/layouts/BaseLayout";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import Link from "next/link";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";

const Portfolios = () => {
  const { data } = useGetPortfolios({
    //this data is undefined
    variables: { pageNum: 1, pageSize: 6 },
  });
  debugger;

  const portfolios = data.data.portfolios.portfolios;

  return (
    <BaseLayout>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>All Postings</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          {portfolios.map((portfolio) => (
            <div key={portfolio._id} className="col-md-4">
              <Link href="/portfolios/[id]" as={`/portfolios/${portfolio._id}`}>
                <a className="card-link">
                  <PortfolioCard portfolio={portfolio} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <div className="pagination-container ml-auto">
        <AppPagination />
      </div>
    </BaseLayout>
  );
};

export default withApollo(Portfolios, { getDataFromTree });
