import "./headerStyle.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerContent">
          <div className="col-1">
            <h1>
              <span className="primary-color">24 hours online</span>
            </h1>
            <h1>
              <span className="primary-color">car booking service</span>
            </h1>
            <p className="headDesc">
              <h3>Bangkok Airport To Pattaya drivers are well-trained and
              high-caliber individuals that have been selected for their
              positive attitude and professionalism. We understand that they are
              the face of our company and therefore we invest heavily in finding
              and recruiting only the best ones available. We are proud of the
              work they do to keep our business moving and how they relate with
              our customers to maintain good relationships. On our part, we
              strive to treat them well to keep them happy so that they can be
              the best Pattaya Taxi’s ambassadors possible.</h3>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
