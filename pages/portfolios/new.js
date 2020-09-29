import PortfolioForm from "@/components/forms/PortfolioForm";
import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import { useCreatePortfolio, useGetUser } from "@/apollo/actions";
import { useRouter } from "next/router";
import BaseLayout from "@/layouts/BaseLayout";
import { toast } from "react-toastify";

const PortfolioNew = () => {
  const [createPortfolio, { error }] = useCreatePortfolio();
  const router = useRouter();

  const {
    data: { user },
  } = useGetUser();

  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };

  const handleCreatePortfolio = async (data) => {
    await createPortfolio({ variables: data });
    toast.success("Posting successfully created!", { autoClose: 3000 });
    setTimeout(() => {
      router.push(`/employer/${user._id}/dashboard`);
    }, 1000);
  };
  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Create New Job Posting</h1>

            <PortfolioForm onSubmit={handleCreatePortfolio} />

            {error && (
              <div className="alert alert-danger">{errorMessage(error)}</div>
            )}
            {error && (
              <div className="alert alert-danger">{errorMessage(error)}</div>
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default withApollo(withAuth(PortfolioNew, ["admin", "instructor"]));
