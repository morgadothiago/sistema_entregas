import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function Home() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão para acessar localização negada!");
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <Center>
        <LoadingIndicator size="large" />
        <LoadingText>Carregando localização...</LoadingText>
      </Center>
    );
  }

  if (errorMsg) {
    return (
      <Center>
        <ErrorText>{errorMsg}</ErrorText>
      </Center>
    );
  }

  return (
    <StyledMapView
      region={{
        latitude: location?.coords.latitude || 0,
        longitude: location?.coords.longitude || 0,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Você está aqui"
        />
      )}
    </StyledMapView>
  );
}

// Styled Components
const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
`;

const ErrorText = styled.Text`
  font-size: 16px;
  color: red;
`;

const LoadingIndicator = styled.ActivityIndicator``;

const StyledMapView = styled(MapView)`
  flex: 1;
`;
