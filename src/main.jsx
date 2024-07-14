import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
/* import App from './App.jsx' */
import "./index.css";

const cardData = [
  {
    type: "FREE",
    price: 0,
    features: [
      {
        user: "Single User",
        available: true,
      },
      {
        storage: "50GB Storage",
        available: true,
      },
      {
        projects: "Unlimited Public Projects",
        available: true,
      },
      {
        access: "Community Access",
        available: true,
      },
      {
        PriPro: "Unlimited Private Projects",
        available: false,
      },
      {
        support: "Dedicated Phone Support",
        available: false,
      },
      {
        subdomain: "Free Subdomain",
        available: false,
      },
      {
        reports: "Monthly Status reports",
        available: false,
      },
    ],
  },
  {
    type: "PLUS",
    price: 9,
    features: [
      {
        user: "5 User",
        available: true,
      },
      {
        storage: "50GB Storage",
        available: true,
      },
      {
        projects: "Unlimited Public Projects",
        available: true,
      },
      {
        access: "Community Access",
        available: true,
      },
      {
        PriPro: "Unlimited Private Projects",
        available: true,
      },
      {
        support: "Dedicated Phone Support",
        available: true,
      },
      {
        subdomain: "Free Subdomain",
        available: true,
      },
      {
        reports: "Monthly Status reports",
        available: false,
      },
    ],
  },
  {
    type: "PRO",
    price: 49,
    features: [
      {
        user: "Unlimited Users",
        available: true,
      },
      {
        storage: "50GB Storage",
        available: true,
      },
      {
        projects: "Unlimited Public Projects",
        available: true,
      },
      {
        access: "Community Access",
        available: true,
      },
      {
        PriPro: "Unlimited Private Projects",
        available: true,
      },
      {
        support: "Dedicated Phone Support",
        available: true,
      },
      {
        subdomain: "Free Subdomain",
        available: true,
      },
      {
        reports: "Monthly Status reports",
        available: true,
      },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*  <p>Without List Rendering</p>
    <Card type="FREE" />
    <Card type="PLUS" />
    <Card type="PRO" /> */}
    {/* <p>With List Rendering</p> */}
    {cardData.map((data) => (
      <Card
        key={data.features.available}
        type={data.type}
        price={data.price}
        user={data.features[0].user}
        storage={data.features[1].storage}
        projects={data.features[2].projects}
        access={data.features[3].access}
        PriPro={data.features[4].PriPro}
        support={data.features[5].support}
        subdomain={data.features[6].subdomain}
        reports={data.features[7].reports}
        available0={data.features[0].available}
        available1={data.features[1].available}
        available2={data.features[2].available}
        available3={data.features[3].available}
        available4={data.features[4].available}
        available5={data.features[5].available}
        available6={data.features[6].available}
        available7={data.features[7].available}
      />
    ))}
  </React.StrictMode>
);
