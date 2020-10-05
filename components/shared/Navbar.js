import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import withApollo from "@/hoc/withApollo";
import { useLazyGetUser } from "@/apollo/actions";
import { Dropdown } from "react-bootstrap";

const AppLink = ({ children, className, href, as }) => (
  <Link href={href} as={as}>
    <a className={className}> {children}</a>
  </Link>
);

const AppNavbar = () => {
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }
    if (!data.user && user) {
      setUser(null);
    }
    if (!hasResponse) {
      setHasResponse(true);
    }
  }
  return (
    <div className="navbar-wrapper">
      <Navbar expand="md" className="navbar-dark fj-mw9">
        <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">
          Jobbster
        </AppLink>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink href="/about" className="nav-link mr-3">
              About
            </AppLink>
            <AppLink href="/portfolios" className="nav-link mr-3">
              Jobs
            </AppLink>
            <AppLink href="/forum/categories" className="nav-link mr-3">
              Forum
            </AppLink>
          </Nav>
          {hasResponse && (
            <Nav>
              {user && (
                <>
                  <span className="nav-link mr-2">
                    Welcome{" "}
                    {user.role === "employer" ? user.username : user.name}
                  </span>

                  {user.role === "admin" || user.role === "employer" ? (
                    <>
                      <AppLink
                        href="/employer/[id]/dashboard"
                        as={`/employer/${user._id}/dashboard`}
                        className="nav-link mr-3"
                      >
                        Dashboard
                      </AppLink>
                      <AppLink href="/UserSearch" className="nav-link mr-3">
                        Candidate Search
                      </AppLink>
                    </>
                  ) : (
                    <AppLink
                      href="/profile/[id]"
                      as={`/profile/${user._id}`}
                      className="nav-link mr-3"
                    >
                      My profile
                    </AppLink>
                  )}

                  <AppLink href="/logout" className="nav-link btn btn-danger">
                    Sign Out
                  </AppLink>
                </>
              )}
              {(error || !user) && (
                <>
                  <AppLink href="/login" className="mr-3 nav-link">
                    Sign In
                  </AppLink>
                  <Dropdown>
                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                      SIGN UP
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/empregister">
                        Employer
                      </Dropdown.Item>
                      <Dropdown.Item href="/uregister">Candidate</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default withApollo(AppNavbar);
