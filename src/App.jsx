import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Press from "./components/Press/Press";
import UserReviews from "./components/UserReviews/UserReviews";


function App() {
  return (
    <div>
      <Header />
      <Main />
      <UserReviews />
      <Press />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
