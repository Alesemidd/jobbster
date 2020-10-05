import { useGetUsersByKey } from "@/apollo/actions";
import UserCard from "@/components/portfolios/UserCard";
import Link from "next/link";

const JobSearch = ({ keyword }) => {
  const { data } = useGetUsersByKey({ variables: { key: keyword } });

  const parsedUsers = (data && data.usersByKey) || [];

  console.log(parsedUsers);
  return (
    <section className="pb-5">
      <p>Search results will appear below</p>
      <div className="row">
        {parsedUsers.map((parsedUser) => (
          <div key={parsedUser._id} className="col-md-4">
            <Link href="/profile/[id]/" as={`/profile/${parsedUser._id}/`}>
              <a user={parsedUser} className="card-link">
                <UserCard user={parsedUser} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default JobSearch;
