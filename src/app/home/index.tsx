import { Alert, FlatList, View } from "react-native";
import { useRef, useState } from "react";
import Swipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";

import { styles } from "./styles";
import { contacts } from "../../utils/contacts";
import { Card } from "../../components/card";
import { CardOption } from "../../components/card-option";

export function Home() {
  const [localContacts, setLocalContacts] = useState(contacts);

  const swipeableRef = useRef<SwipeableMethods | null>(null);

  function onSwipeableWillOpen(
    direction: "left" | "right",
    contactId: string,
    currentRef: SwipeableMethods | null
  ) {
    if (direction === "left")
      Alert.alert("", "Deseja deletar o contato?", [
        {
          text: "Não",
          style: "cancel",
          onPress: () => {
            currentRef?.close();
          },
        },
        {
          text: "Sim",
          style: "default",
          onPress: () => {
            setLocalContacts(
              localContacts.filter((item) => item.id !== contactId)
            );
          },
        },
      ]);

    if (swipeableRef.current) swipeableRef.current.close();

    swipeableRef.current = currentRef;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={localContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let currentRef: SwipeableMethods | null = null;

          return (
            <Swipeable
              ref={(swipeable) => (currentRef = swipeable)}
              containerStyle={styles.swipeableContainer}
              friction={2}
              overshootRight={false}
              rightThreshold={50}
              onSwipeableWillOpen={(direction) =>
                onSwipeableWillOpen(direction, item.id, currentRef)
              }
              renderRightActions={() => (
                <View style={styles.rightActions}>
                  <CardOption icon="open-in-new" backgroundColor="#00B960" />
                  <CardOption icon="close" backgroundColor="#3E68D7" />
                </View>
              )}
              renderLeftActions={() => (
                <View style={styles.leftActions}>
                  <CardOption icon="delete" backgroundColor="#E83D55" />
                </View>
              )}
            >
              <Card name={item.name} email={item.email} />
            </Swipeable>
          );
        }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
