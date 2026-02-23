import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

function Authcontainer() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {isLogin ? <Signin /> : <Signup />}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            marginLeft: "5px"
          }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
      </p>
    </div>
  );
}

export default Authcontainer;