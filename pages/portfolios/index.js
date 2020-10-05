import AppPagination from "@/components/shared/Pagination";
import JobSearch from "@/components/portfolios/JobSearch";
import { useState } from "react";
import { useGetPortfolios } from "@/apollo/actions";
import BaseLayout from "@/layouts/BaseLayout";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import Link from "next/link";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import React from "react";

const useGetInitialData = (pagination) => {
  const { data } = useGetPortfolios({
    variables: { ...pagination },
  });

  const portfolios = (data && data.portfolios.portfolios) || [];
  const count = (data && data.portfolios.count) || { count: 0 };

  return { portfolios, count };
};

const Portfolios = () => {
  const [pagination, setPagination] = useState({ pageNum: 1, pageSize: 6 });

  const { portfolios, count } = useGetInitialData(pagination);

  const count1 = Number(count);

  let inputKey = "";

  const inputHandler = (event) => {
    event.preventDefault();
    inputKey = event.target.value;
  };

  const [keyword, setKeyword] = useState(0);

  const setState = () => {
    setKeyword(inputKey);
  };
  return (
    <BaseLayout>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-4 pb-2">
            <h1>All Postings </h1>
          </div>

          <input onChange={inputHandler} placeholder="Search jobs by keyword" />
          <button
            onClick={setState}
            className="ml-2 mt-1 btn btn-main bg-blue py-2 ttu"
          >
            Search
          </button>
        </div>
      </section>
      {keyword ? (
        <JobSearch keyword={keyword} />
      ) : (
        <section className="pb-5">
          <div className="row">
            {portfolios.map((portfolio) => (
              <div key={portfolio._id} className="col-md-4">
                <Link
                  href="/portfolios/[id]"
                  as={`/portfolios/${portfolio._id}`}
                >
                  <a className="card-link">
                    <PortfolioCard portfolio={portfolio} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      <div className="pagination-container ml-auto">
        <AppPagination
          count={count1}
          pageSize={pagination.pageSize}
          pageNum={pagination.pageNum}
          onPageChange={(pageNum, pageSize) => {
            setPagination({ pageNum, pageSize });
          }}
        />
      </div>
    </BaseLayout>
  );
};

export default withApollo(Portfolios, { getDataFromTree });
