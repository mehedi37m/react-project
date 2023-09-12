import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Renew from "./Renew";
import Actor from "./Actor";

function Setup() {
  const age = 22;
  return <h1>hello world : {age} </h1>;
}

function Device(props) {
  return (
    <div>
      <h1>
        this device : {props.name} price: {props.price}{" "}
      </h1>
    </div>
  );
}
function App() {
  const actors = ["sharuk khan", "salman khan", "amir khan", "roushan"];

  return (
    <>
      <Actor name={"mehedi"}></Actor>
      {actors.map((actor) => (
        <Actor name ={actor}></Actor>
      ))}

      <Device name="laptop" price="25000" />
      <Device name="mobile" price="2500" />
      <Device name="watch" price="5000" />
      <Device name="dress" price="200" />
      <Setup />

      <Setup />

      <Renew task="learn" isDone={true}></Renew>
      <Renew task="learn-more" isDone={false}></Renew>
      <Renew task="learn-more" isDone={false}></Renew>
      <Renew task="learn" isDone={true}></Renew>
    </>
  );
}

export default App;
