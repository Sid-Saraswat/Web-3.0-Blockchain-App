import { Footer, Navbar, Services, Transaction, Welcome, Form } from "./components"
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Form />
        <Services />
        <Transaction />
        <Footer />
      </div>
    </div>
  );
}

export default App;
