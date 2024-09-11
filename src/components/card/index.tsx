import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  email: string;
};

export function Card({ name, email }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}
