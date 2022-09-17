import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-75149.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-75149/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
