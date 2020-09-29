import PortfolioForm from "@/components/forms/PortfolioForm";
import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import BaseLayout from "@/layouts/BaseLayout";
import { useRouter } from "next/router";
import {
  useGetPortfolio,
  useUpdatePortfolio,
  useGetUser,
} from "@/apollo/actions";
import { toast } from "react-toastify";

const PortfolioEdit = () => {
  const router = useRouter();
  const [updatePortfolio, { error }] = useUpdatePortfolio();
  const { id } = router.query;
  const { data } = useGetPortfolio({
    variables: { id },
  });
  const {
    data: { user },
  } = useGetUser();

  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };

  const handlePortfolioUpdate = async (data) => {
    await updatePortfolio({ variables: { id, ...data } });
    toast.success("Posting successfully updated!", { autoClose: 3000 });

    setTimeout(() => {
      router.push(`/employer/${user._id}/dashboard`);
    }, 3000);
  };

  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Edit Portfolio</h1>
            {data && (
              <PortfolioForm
                initialData={data.portfolio}
                onSubmit={handlePortfolioUpdate}
              />
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

export default withApollo(withAuth(PortfolioEdit, ["admin", "instructor"]));
