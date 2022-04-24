import { InlineStyle } from "./components/inlineStyle";
import "./styles.css";

export default function App() {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContents: "space-around",
    alineItem: "center"
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <InlineStyle />
    </div>
  );
}
