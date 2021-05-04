import Restaurant from "../Restaurant";

const Header = ({ data }) => {
  return (
    <>
      <div className="I">
        <div className="f">
          <div className="p">
            <img
              src="https://consumer-component-library.roocdn.com/22.1.1/static/images/logo-teal.svg"
              alt="logo"
            />

            <div className="h">
              <Restaurant
                name={data.restaurant.name}
                description={data.restaurant.description}
                url={data.restaurant.picture}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
