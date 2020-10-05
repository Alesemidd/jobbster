import EmpRegisterForm from "@/components/forms/EmpRegisterForm";
import withApollo from "@/hoc/withApollo";
import { Mutation } from "react-apollo";
import { SIGN_UP } from "@/apollo/queries";
import Redirect from "@/components/shared/Redirect";
import BaseLayout from "@/layouts/BaseLayout";

const Register = () => {
  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };
  return (
    <BaseLayout>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Employer Registration</h1>
            <Mutation mutation={SIGN_UP}>
              {(signUpUser, { data, error }) => (
                <>
                  <EmpRegisterForm
                    onSubmit={(registerData) => {
                      signUpUser({ variables: registerData });
                    }}
                  />
                  {data && data.signUp && (
                    <Redirect to="/login" query={{ message: "LOGGED_IN" }} />
                  )}
                  {error && (
                    <div className="alert alert-danger">
                      {errorMessage(error)}
                    </div>
                  )}
                </>
              )}
            </Mutation>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
export default withApollo(Register);
