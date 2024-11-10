import Router from "./components/Router";
import { UserProvider } from "./stores/UserContext";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
