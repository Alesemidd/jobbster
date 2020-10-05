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
    const user = (data && data.userById) || [];

    return (
      <BaseLayout>
        <section className="container-1">
          <img id="profileimg" src={user.avatar} />
          <br />
          <h3>
            {" "}
            <br />
            <strong>
              Hi! I'm {user.name} and I'm an experienced {user.jobtitle}
            </strong>
          </h3>
          <br />
          <h4>Welcome to my profile page!</h4>
          <br />
          <Tabs defaultActiveKey="profile" id="profile">
            <Tab eventKey="home" title="Contact info">
              <ul>
                <li>Cell: {user.phone}</li>
                <li>
                  {" "}
                  <a className="link" href={`https://${user.linked}`}>
                    My LinkedIn Profile
                  </a>
                </li>
                <li>Email: {user.email}</li>
                <a href={`mailto:${user.email}`}>
                  Click Here To Send me an email!
                </a>
              </ul>
            </Tab>
            <Tab eventKey="stack" title="Tech Stack">
              <p>{user.stack}</p>
            </Tab>
            <Tab eventKey="cv" title="CV">
              <h4>Here is my CV in plain text as requrested:</h4>
              <br />
              <p>{user.cv}</p>
            </Tab>
          </Tabs>
        </section>
      </BaseLayout>
    );
  },
  ["admin", "employer"],
  { ssr: true }
);
export default withApollo(Profile, { getDataFromTree });
