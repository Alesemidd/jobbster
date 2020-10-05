import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import withAuth from "@/hoc/withAuth";
import { getDataFromTree } from "@apollo/react-ssr";
import withApollo from "@/hoc/withApollo";
import { Tabs, Tab } from "react-bootstrap";
import { useRouter } from "next/router";
import { useGetUserById } from "@/apollo/actions";

const Profile = withAuth(
  () => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetUserById({
      variables: { ID: id },
    });
    const user1 = (data && data.userById) || [];

    return (
      <BaseLayout>
        <section className="container-1">
          <img id="profileimg" src={user1.avatar} />
          <br />
          <h3>
            {" "}
            <br />
            <strong>
              Hi! I'm {user1.name} and I'm an experienced {user1.jobtitle}
            </strong>
          </h3>
          <br />
          <h3>Welcome to my profile page!</h3>
          <br />
          <Tabs defaultActiveKey="profile" id="profile">
            <Tab eventKey="home" title="Contact info">
              <ul>
                <li>Cell: {user1.phone}</li>
                <li>
                  {" "}
                  <a className="link" href={`https://${user1.linked}`}>
                    My LinkedIn Profile
                  </a>
                </li>
                <li>Email: {user1.email}</li>
                <a href={`mailto:${user1.email}`}>
                  Click Here To Send me an email!
                </a>
              </ul>
            </Tab>
            <Tab eventKey="stack" title="Tech Stack">
              <p>{user1.stack}</p>
            </Tab>
            <Tab eventKey="cv" title="CV">
              <h4>Here is my CV in plain text as requrested:</h4>
              <br />
              <p>{user1.cv}</p>
            </Tab>
          </Tabs>
        </section>
      </BaseLayout>
    );
  },
  ["admin", "employer", "seeker"],
  { ssr: true }
);
export default withApollo(Profile, { getDataFromTree });
