import React, { useContext } from "react";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
const FavouritesIcon = (props) => {
  return <List.Icon {...props} color={colors.ui.error} icon="heart" />;
};

const LogoutIcon = (props) => {
  return <List.Icon {...props} color={colors.ui.secondary} icon="door" />;
};

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <Avatar.Icon
            size={180}
            icon="human"
            backgroundColor={colors.brand.primary}
          />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={FavouritesIcon}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogout} />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
