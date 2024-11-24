import ErrorBoundary from "./components/ErrorBoundary";
import Router from "./components/Router";
import { UserProvider } from "./stores/UserContext";

function App() {
  return (
    <ErrorBoundary>
      <UserProvider>
        <Router />
      </UserProvider>
    </ErrorBoundary>
  );
}

export default App;
