import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppleIcon from "@mui/icons-material/Apple";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./CategorySidebar.css";

function CategorySidebar() {
  const categories = [
    { name: "Fruits & Vegetables", icon: <AppleIcon /> },
    { name: "Meat & Fish", icon: <SetMealIcon /> },
    { name: "Snacks", icon: <LunchDiningIcon /> },
    { name: "Pet Care", icon: <FavoriteBorderIcon /> },
    { name: "Home & Cleaning", icon: <CleaningServicesIcon /> },
    { name: "Dairy", icon: <LocalDrinkIcon /> },
    { name: "Cooking", icon: <SetMealIcon /> },
    { name: "Breakfast", icon: <LunchDiningIcon /> },
    { name: "Beverage", icon: <LocalDrinkIcon /> },
    { name: "Health & Beauty", icon: <FavoriteBorderIcon /> },
  ];

  return (
    <div className="sidebar">
      {categories.map((cat, index) => (
        <div className="sidebar-item" key={index}>
          <div className="left">
            <span className="icon">{cat.icon}</span>
            <span className="text">{cat.name}</span>
          </div>

          <KeyboardArrowDownIcon className="arrow" />
        </div>
      ))}
    </div>
  );
}

export default CategorySidebar;
