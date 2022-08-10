const Home = () => {
  return (
    <main>
      <div class="home">
        <div class="home-text">
          <h1>
            Easy scheduling <span>ahead</span>
          </h1>
          <p>
            Calendly is your hub for scheduling meetings professionally and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work
          </p>
          <label>
            <input type="text" placeholder="Enter your email" />
            <button>Sign up</button>
          </label>
          <p class="imp">Create your free account. No credit card required.</p>
        </div>
        <div class="home-img">
          <img src="images/calendly-home.jpg" alt="" />
        </div>
      </div>
      <div class="users">
        <div class="desc">
          <p>
            Simplified scheduling for more than <span>10,000,000</span> users
            worldwide
          </p>
        </div>
        <div class="icons">
          <i class="fa fa-digg"></i>
          <i class="fab fa-dropbox"></i>
          <i class="fa fa-wechat"></i>
          <i class="fa fa-cc-visa"></i>
          <i class="fa fa-cc-paypal"></i>
        </div>
      </div>
      <div class="how-to">
        <div class="one">
          <p class="num">1.</p>
          <div class="rule">
            <h4>
              Create
              <br /> simple rules
            </h4>
            <p>
              Let Calendly know your availability preferences and it’ll do the
              work for you.
            </p>
          </div>
        </div>
        <div class="one">
          <p class="num">2.</p>
          <div class="rule">
            <h4>
              Create
              <br /> simple rules
            </h4>
            <p>
              Let Calendly know your availability preferences and it’ll do the
              work for you.
            </p>
          </div>
        </div>
        <div class="one">
          <p class="num">3.</p>
          <div class="rule">
            <h4>
              Create
              <br /> simple rules
            </h4>
            <p>
              Let Calendly know your availability preferences and it’ll do the
              work for you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
