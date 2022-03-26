import "./App.css";
import Profile from "./profile/Profile";

const App = () => {
  const Produit = [
    {
      // fullName: "Tap Name me! ",
      biography: "GomyCode fullstack js Student ",
      profession: "student",
      photo: "ela.png",
    },
  ];
  return (
    <div className="App">
      <h1 style={{ color: "brown" }}>Welcome !</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Produit.map((el) => (
          <Profile name={el.fullName} bio={el.bio}>
            <img src={el.photo} alt="tel" />
          </Profile>
        ))}
      </div>
    </div>
  );
};

export default App;
