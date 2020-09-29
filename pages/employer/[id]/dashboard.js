import withApollo from "@/hoc/withApollo";
import withAuth from "@/hoc/withAuth";
import BaseLayout from "@/layouts/BaseLayout";
import { Card, Button } from "react-bootstrap";
import { useGetUserPortfolios, useDeletePortfolio } from "@/apollo/actions";
import { getDataFromTree } from "@apollo/react-ssr";
import Link from "next/link";
import { formatDate } from "@/utils/functions";

const InstructorDashboard = withAuth(
  () => {
    const { data } = useGetUserPortfolios();
    const [deletePortfolio] = useDeletePortfolio();
    const userPortfolios = (data && data.userPortfolios) || [];

    return (
      <BaseLayout>
        <h1 className="page-title pt-5 pb-1">Your current postings</h1>
        <Link href="/portfolios/new">
          <Button className="newpost" variant="success">
            Create new
          </Button>
        </Link>
        <div className="pb-5">
          <div className="row">
            {userPortfolios.map((p) => (
              <Card key={p._id} className=" col-4 dash1">
                {!p && (
                  <i className="ml-2">
                    You haven't created any postings yet. Create new now!
                  </i>
                )}
                <Card.Header>
                  {p.jobTitle} at {p.company}
                </Card.Header>
                <Card.Body className="nohover">
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text>
                    {formatDate(p.startDate)} -{" "}
                    {(p.endDate && formatDate(p.endDate)) || "Present"}
                  </Card.Text>

                  {/* TODO: Delete Update Buttons */}
                  <Link href="/portfolios/[id]" as={`/portfolios/${p._id}`}>
                    <a className="card-link">
                      <Button className="view" variant="success">
                        View
                      </Button>
                    </a>
                  </Link>
                  <Link
                    href="/portfolios/[id]/edit"
                    as={`/portfolios/${p._id}/edit`}
                  >
                    <a className="btn btn-warning" id="update">
                      Update
                    </a>
                  </Link>
                  <Button
                    className="delete"
                    onClick={() =>
                      deletePortfolio({ variables: { id: p._id } })
                    }
                    variant="danger"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </BaseLayout>
    );
  },
  ["admin", "instructor"],
  { ssr: true }
);

export default withApollo(InstructorDashboard, { getDataFromTree });
