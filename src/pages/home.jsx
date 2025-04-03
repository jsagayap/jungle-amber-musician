import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// Our language strings for the header
const strings = [
  "Hello 👋",
  "Coffee ☕",
  "Coding 💻",
  "Interesting 😃",
  "Nothing here",
  "Keep clicking",
  "Click click click",
  "Yes, please do",
  "Go go go!",
  "Click the click",
  "Wow, nice!",
  "Keep it up!",
  "My buttons",
  "Don't stop",
  "Very addicting!"
];
const combo = 0;
var val = 0;
var max = 10;

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
  const [hello, setHello] = React.useState(strings[0]);
  const [combo, setCombo] = React.useState(0);
  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 0, y: 8, scale: 2.5 });
  const [what] = useWiggle({x: 0, y: 0, scale: 1});
  
  const handleChangeHello = () => {
    val = val + 1;
    
    if (val >= max) {
      const newHello = randomLanguage();
      setHello(newHello);
      val = 0;
    }
    const newCombo = combo + 1;
    setCombo(newCombo);
  };
  return (
    <>
      <h1 className="title">{hello}</h1>
      <animated.div onMouseDown={trigger} style={what}>
        <div className="illustration" onMouseDown={handleChangeHello} alt="click click click"></div>
      </animated.div>
      <div className="navigation">
        <animated.div style={style}>
          <p className="combo">{combo}</p>
        </animated.div>
        <small className="comboLabel">Combo</small>
      </div>
      <div className="instructions">
        <h2>Click the button</h2>
        <p>
          Made by Sagayap, Jericho David C.
        </p>
      </div>
    </>
  );
}
