import { useGetPortfoliosByKey } from "@/apollo/actions";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import Link from "next/link";

const JobSearch = ({ keyword }) => {
  const { data } = useGetPortfoliosByKey({ variables: { key: keyword } });
  const parsedPortfolios = (data && data.portfoliosByKey) || [];

  return (
    <section className="pb-5">
      <p>Your results</p>
      <div className="row">
        {parsedPortfolios.map((portfolio) => (
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
  );
};
export default JobSearch;
