import React from "react";
import { View } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavgation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";

export default () => {
  //const isLoggedIn = useIsLoggedIn();
  //const logIn = useLogIn();
  //const logOut = useLogOut();
  const isLoggedIn = true;

  return (
    <View style={{ flex: "1" }}>
      {isLoggedIn ? <TabNavigation /> : <AuthNavigation />}
    </View>
  );
};
