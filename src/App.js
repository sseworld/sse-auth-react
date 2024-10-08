import "./styles.css";
import { GithubLoginButton } from "@sse-auth/react";
import "@sse-auth/react/dist/css/styles.css";

export default function App() {
  const onSucc = (accessToken, userData) => {
    console.log(accessToken);
    console.log(userData);
    alert(`Logged in successfully! Welcome, ${userData.name}!`);
  };

  const onFail = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GithubLoginButton
        clientId="Ov23ligCZh50CqgsyUMq"
        clientSecret="48585fbffe12cfdabdae9a795e84ff2f3237c375"
        onSuccess={onSucc}
        onFailure={onFail}
      />
    </div>
  );
}
