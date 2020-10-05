const Hero = () => {
  return (
    <section className="fj-hero">
      <div className="fj-hero-wrapper row">
        <div className="hero-left col-md-6">
          <h1 className="white hero-title">
            Welcome to Jobbster! The New Normal Tech Jobs for the post Covid
            generation!
          </h1>
          <h2 className="white hero-subtitle">
            Check out our latest job postings and apply!
          </h2>
          <div className="button-container">
            <a href="/about" className="btn btn-main bg-blue ttu">
              How Jobbster works
            </a>
          </div>
        </div>
        <div className="hero-right col-md-6">
          <div className="hero-image-container">
            <a className="grow hero-link">
              <img className="hero-image" src="/jobs4.jpg"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
