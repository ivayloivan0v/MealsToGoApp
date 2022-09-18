import React, { useState } from "react";
import { List, Divider } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const breakfastListIcon = (props) => (
    <List.Icon {...props} icon="bread-slice" />
  );

  const lunchListIcon = (props) => <List.Icon {...props} icon="hamburger" />;

  const dinnerListIcon = (props) => (
    <List.Icon {...props} icon="food-variant" />
  );

  const drinksListIcon = (props) => <List.Icon {...props} icon="cup" />;

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <Spacer position="bottom" size="large" />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={breakfastListIcon}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={lunchListIcon}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
          <Divider />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={dinnerListIcon}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={drinksListIcon}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
