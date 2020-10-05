import React from "react";
import BaseLayout from "@/layouts/BaseLayout";

const aboutPage = () => {
  return (
    <BaseLayout>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Welcome to Jobbster!</h1>
            <br />
            <h4>
              The only "digital by default" community of employers and talented
              individuals who understand the true value of remote work while
              collaboratively dealing with its challenges.
            </h4>

            <h3>For Employers:</h3>
            <p>
              {" "}
              Here is how to make the most of out your Jobbster experience:
              <br />
              <br />
              <ul>
                <li>
                  First off, click on the Sign-up drowdown and register as an
                  employer.
                </li>
                <li>
                  Once you've created your employer account head over to your
                  Employer Dashboard where you can post a new job and keep track
                  of all the posts you've created in the past.
                </li>
                <li>
                  Check out our Talent dabase in the{" "}
                  <a href="/UserSearch">
                    <nobr>Candidate Search</nobr>
                  </a>{" "}
                  to look for and reach out to the candidates with very unique
                  skillsets who might not otherwise be actively looking but
                  could still be interested if an offer presented itself.{" "}
                </li>
                <li>
                  Finally, be active in our{" "}
                  <a href="/forum/categories">
                    <nobr>Forum</nobr>
                  </a>
                  ! Post a coding challenge or a case study specific to your
                  business needs to attract the best talent! The replies will
                  only be visible to you and the poster.{" "}
                </li>
              </ul>
            </p>
            <h3>For Job Seekers:</h3>
            <p>
              <ul>
                <li>
                  To begin with, click on the Sign-up drowdown and register as a
                  Candidate. Make sure to paste your CV in plain text and list
                  your most important skills in Tech Stack section of the
                  registration form. It's the first thing employers will see
                  when browsing our Talent Database.
                </li>
                <li>
                  Once you've created your Job seeker account head over to the{" "}
                  <a href="/portfolios">
                    <nobr>Current postings Database</nobr>
                  </a>{" "}
                  and look for jobs by any possible criteria you can think off.
                  Our search engine will pick up the job you're looking for.
                </li>
                <li>
                  Most importantly, be active in our{" "}
                  <a href="/forum/categories">
                    <nobr>Forum</nobr>
                  </a>
                  ! Solve a coding challenge and immediately stand out of the
                  crowd! The replies will only be visible to you and the job.
                  It's also a good source valuable insights from your fellow
                  candidates and empoyers.
                </li>
              </ul>
            </p>
          </div>
          <p>
            AAAnd last but not least - don't forget to have FUN while you're at
            it! Our{" "}
            <a href="/forum/categories/developer-jokes">
              <nobr>Developer Humor Thread</nobr>
            </a>{" "}
            has got you covered! =P
          </p>
        </div>
      </section>
      <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
        <div className="container text-center">
          <small>Copyright &copy; Stanleigh Denning Productions</small>
        </div>
      </footer>
    </BaseLayout>
  );
};
export default aboutPage;
