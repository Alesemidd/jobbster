import UserSearch from "@/components/portfolios/UserSearch";
import { useState } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import React from "react";

const Users = () => {
  let inputKey = "";

  const inputHandler = (event) => {
    event.preventDefault();
    inputKey = event.target.value;
  };

  const [keyword, setKeyword] = useState("");

  const setState = () => {
    setKeyword(inputKey);
  };
  return (
    <BaseLayout>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-4 pb-2">
            <h1>Candidate Search </h1>
          </div>

          <input
            onChange={inputHandler}
            placeholder="Search candidates by keyword"
          />
          <button
            onClick={setState}
            className="ml-2 mt-1 btn btn-main bg-blue py-2 ttu"
          >
            Search
          </button>
        </div>
      </section>

      <UserSearch keyword={keyword} />
    </BaseLayout>
  );
};

export default withApollo(Users, { getDataFromTree });
