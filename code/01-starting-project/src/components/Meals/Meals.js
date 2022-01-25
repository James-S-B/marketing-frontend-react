import MealsSummary from "./MealsSummary";
import AvailibleMeals from "./AvailibleMeals";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailibleMeals />
    </Fragment>
  );
};
export default Meals;
