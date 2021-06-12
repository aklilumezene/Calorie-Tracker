import MealItem from "./components/MealItem"

function App() {
  const meals = [
    {
      date: new Date(2021, 4, 12, 19, 0, 0, 0),
      item: "150g omelet",
      meal: "Dinner",
      calories: 264.4
    },
    {
      date: new Date(2021, 4, 11, 9, 32, 0, 0),
      item: "100g mashed potato",
      meal: "Breakfast",
      calories: 113
    },
    {
      date: new Date(2021, 4, 11, 18, 40, 0, 0),
      item: "200g green salad",
      meal: "Dinner",
      calories: 46.9
    },
    {
      date: new Date(2021, 4, 12, 12, 30, 0, 0),
      item: "150g burger",
      meal: "Lunch",
      calories: 356.6
    },
    {
      date: new Date(2021, 4, 12, 18, 30, 0, 0),
      item: "200g chicken soup",
      meal: "Dinner",
      calories: 66.3
    }
  ]

  return (
    <div>
      <h1>Hello React!</h1>
      <MealItem calories={meals[0].calories} meal={meals[0].meal} item={meals[0].item} date={meals[0].date} />
      <MealItem calories={meals[1].calories} meal={meals[1].meal} item={meals[1].item} date={meals[1].date} />
      <MealItem calories={meals[2].calories} meal={meals[2].meal} item={meals[2].item} date={meals[2].date} />
      <MealItem calories={meals[3].calories} meal={meals[3].meal} item={meals[3].item} date={meals[3].date} />
      <MealItem calories={meals[4].calories} meal={meals[4].meal} item={meals[4].item} date={meals[4].date} />
    </div>

  );
}

export default App;
