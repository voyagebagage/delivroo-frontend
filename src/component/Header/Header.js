import Restaurant from "../Restaurant/Restaurant";
import axios from "axios";

const Header = ({ data }) => {
  {
    return (
      <>
        <div className="I">
          <div className="f">
            <div className="p">
              <div className="h">
                <Restaurant
                  name={data.restaurant.name}
                  description={data.restaurant.description}
                  url={
                    "https://f.roocdn.com/images/menus/17697/header-image.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Header;
