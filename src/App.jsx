import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

import Magnifier from "./assets/images/icon-supervisor.svg";
import TeamBuilder from "./assets/images/icon-team-builder.svg";
import Karma from "./assets/images/icon-karma.svg";
import Calculator from "./assets/images/icon-calculator.svg";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Supervisor",
      text: "Monitors activity to identify project roadbloacks",
      img: Magnifier,
      color: "#44D3D2",
    },
    {
      id: 2,
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      img: TeamBuilder,
      color: "#EA5454",
    },
    {
      id: 3,
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      img: Karma,
      color: "#FCAE4A",
    },
    {
      id: 4,
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      img: Calculator,
      color: "#549EF2",
    },
  ];

  return (
    <main className="px-[40px] py-[85px] lg:px-[165px] lg:py-[80px] bg-[#fafafa]">
      <Header />

      {/* Cards container */}
      <div className="flex flex-col gap-6 items-center justify-center md:grid md:grid-cols-2 md:grid-rows-2 cards-container">
        {cardData.map((elem) => {
          return (
            <Card
              key={elem.id}
              title={elem.title}
              text={elem.text}
              img={elem.img}
              color={elem.color}
              id={elem.id}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
