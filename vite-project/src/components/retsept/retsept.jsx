import "./retsept.scss";
import "../../index.css";
import Menyu from "../../assets/vegatables.svg";
import Qovun from "../../assets/qovun.svg";
import Toga from "../../assets/toga.svg";


const Retsept = () => {
  return (
    <div className="allRetsepts">
      <div className="retsept">
        <div className="left">
          <h1>About US</h1>
          <p>
            Organic food is grown without the use of synthetic chemicals, such
            as human-made pesticides and fertilizers, and does not contain
            genetically modified organisms (GMOs). Organic foods include fresh
            produce, meats, and dairy products as well as processed foods such
            as crackers, drinks, and frozen meals.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right">
          <img src={Menyu} alt="" />
        </div>
      </div>
      <div className="retsept">
        <div className="right">
          <img className="qovun" src={Qovun} alt="" />
        </div>
        <div className="left2">
          <h1>Fresh Vegetables Every Day</h1>
          <p>
            Healthy life as informed declared we enjoy the margaret. Joy
            horrible moreover man feelings own shy. Request norland neither
            mistake for yet. Between the for morning assured country believe.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="retsept">
        <div className="left">
          <h1>Cooked by the Best Chefs</h1>
          <p>
            Believing neglected so so allowance existence departure in. In
            design active temper be uneasy. Thirty for remove plenty regard you
            summer though. He preference connection astonished on of ye.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right">
          <img src={Toga} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Retsept;
