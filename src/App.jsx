import { Button } from "antd";
import { useState } from "react";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
