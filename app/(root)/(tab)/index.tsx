import React, { useEffect } from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Any side effects can be handled here
  }, []);

  const handlePress = () => {
    router.push('/layout'); 
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        style={styles.reactLogo}
        source={require('@/assets/images/ecwa-logo.png')}
      />
      <Text style={styles.logotext}>ECWA Sunday School Manual 2025</Text>
      <Text style={styles.mottotext}>Growing in Faith</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff', // Set a background color if needed
  },
  reactLogo: {
    height: 180,
    width: 180,
    marginTop: -100,
    marginBottom: 10,
  },
  logotext: {
    color: '#000435',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  mottotext: {
    color: '#000435',
    fontSize: 17,
    textAlign: "center",
    fontFamily: "helvetica",
  },
});
