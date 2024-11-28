import ErrorBoundary from "./components/ErrorBoundary";
import Router from "./components/Router";
import { ChatProvider } from "./stores/ChatContext";
import { UserProvider } from "./stores/UserContext";

function App() {
  return (
    <ErrorBoundary>
      <UserProvider>
        <ChatProvider>
          <Router />
        </ChatProvider>
      </UserProvider>
    </ErrorBoundary>
  );
}

export default App;
