import AppRoutes from "./routes/AppRoutes";

function App() {
  const isAuthenticated = true;

  return <AppRoutes isAuthenticated={isAuthenticated} />;
}

export default App;
