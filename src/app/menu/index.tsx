import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { MenuOption } from "../../components/menu-option";

export function Menu() {
  const [option, setOption] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.5}>
          <Feather name="chevron-left" size={18} />
        </TouchableOpacity>

        <View style={styles.options}>
          <MenuOption
            icon="home"
            title="Início"
            onPress={() => setOption("home")}
            isSelected={option === "home"}
          />
          <MenuOption
            icon="file-text"
            title="Documentos"
            onPress={() => setOption("docs")}
            isSelected={option === "docs"}
          />
          <MenuOption
            icon="bell"
            title="Notificações"
            onPress={() => setOption("notifications")}
            isSelected={option === "notifications"}
          />
        </View>
      </View>
    </View>
  );
}
