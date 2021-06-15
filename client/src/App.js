import react, { useEffect, useState } from "react";
import axios from "axios";
import "./app.scss";
import Logo from "./img/talkdesk_logo.png";
import LandingForm from "./components/LandingForm";

function App() {
  useEffect(() => {
    axios({
      method: "POST",
      url: "https://demoeng.talkdeskid.com/oauth/token",
      headers: {
        "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic cd ..",
      },
      data: {
        scope: "callback:write",
        grant_type: "client_credentials",
      },
    })
      .then((res) => {
        console.log("auth response", res);
        localStorage.setItem("token", res.data.access_token);
      })
      .catch((err) => {
        console.log("An error is happening", err);
      });
  }, []);

  const [popup, setPopup] = useState(false);

  return (
    <div className="App">
      <div className="top">
        <div className="text">
          <h1 className="top-text first">Let's Speed Up Customer Call Backs</h1>
          <h1 className="top-text second">Why,You Ask?</h1>
        </div>
        <div className="logo-container">
          <img src={Logo} alt="Talkdesk Logo" />
        </div>
      </div>
      <div className="bottom">
        <h1>You're Missing Out on Deals!</h1>
        <div className="why">
          <p>
            The customer submitted a form for a reason. Don’t keep them waiting!{" "}
          </p>
        </div>
        <div className="why">
          <p>
            Speeding up callbacks means more of an opportunity to catch warm
            leads or concerned customers while they’re hot!{" "}
          </p>
        </div>
        <div className="why">
          <p>
            The longer you wait to call, the more chance they find a solution
            elsewhere or churn.{" "}
          </p>
        </div>
      </div>

      <LandingForm setPopup={setPopup} />
    </div>
  );
}

export default App;
