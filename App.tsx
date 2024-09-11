import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Home } from "./src/app/home";
import { Menu } from "./src/app/menu";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView>
          {/* <Home /> */}
          <Menu />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
