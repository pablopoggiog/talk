import React, { FunctionComponent } from "react";
import { useFirebase } from "src/hooks";
import { Chat, Login, Logout } from "src/containers";

const App: FunctionComponent = () => {
  const { user } = useFirebase();

  return (
    <div>
      <section>
        {user ? (
          <>
            <Chat /> <Logout />{" "}
          </>
        ) : (
          <Login />
        )}
      </section>
    </div>
  );
};

export default App;
