/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({
  type,
  price,
  user,
  storage,
  projects,
  access,
  PriPro,
  support,
  subdomain,
  reports,
  available0,
  available1,
  available2,
  available3,
  available4,
  available5,
  available6,
  available7
}) => {
  //Object Method:
  /*  const cardObj= {
        type:"FREE"
    }; */
  return (
    <div className="cardsDiv">
      <div className="innerbox">
        <p style={{ textAlign: "center", margin: 3 }}>{type}</p>
        <h1 style={{ fontSize: "xx-large" }}>${price}/Month</h1>

        {available0 ? (
          <p style={{ opacity: "none" }}>&#10004;{user}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{user}</p>
        )}
        {available1 ? (
          <p style={{ opacity: "none" }}>&#10004;{storage}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{storage}</p>
        )}
        {available2 ? (
          <p style={{ opacity: "none" }}>&#10004;{projects}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{projects}</p>
        )}
        {available3 ? (
          <p style={{ opacity: "none" }}>&#10004;{access}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{access}</p>
        )}
        {available4 ? (
          <p style={{ opacity: "none" }}>&#10004;{PriPro}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{PriPro}</p>
        )}
        {available5 ? (
          <p style={{ opacity: "none" }}>&#10004;{support}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{support}</p>
        )}
        {available6 ? (
          <p style={{ opacity: "none" }}>&#10004;{subdomain}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{subdomain}</p>
        )}
        {available7 ? (
          <p style={{ opacity: "none" }}>&#10004;{reports}</p>
        ) : (
          <p style={{ opacity: 0.5 }}>&#10006;{reports}</p>
        )}
        <button type="button" className="button">
          Button
        </button>
      </div>
    </div>
  );
};
export default Card;
