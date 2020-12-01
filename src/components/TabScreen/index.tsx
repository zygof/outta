import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabScreen = (
  name: string,
  component: any,
  label: string,
  colorTab: string,
  icon: string,
  size: number
) => {
  return (
    <Tab.Screen
      name={name}
      component={component}
      options={{
        tabBarLabel: { label },
        tabBarColor: { colorTab },
        tabBarIcon: ({ color }) => (
          <Icon name={icon} color={color} size={size} />
        ),
      }}
    />
  );
};
export default TabScreen;
