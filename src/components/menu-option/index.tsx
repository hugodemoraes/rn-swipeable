import { useEffect } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = PressableProps & {
  title: string;
  icon: keyof typeof Feather.glyphMap;
  isSelected: boolean;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function MenuOption({ title, icon, isSelected, ...rest }: Props) {
  const animationStatus = useSharedValue(0);

  const animatedPressableStyle = useAnimatedStyle(() => ({
    width: interpolate(
      animationStatus.value,
      [0, 1],
      [42, 144],
      Extrapolation.CLAMP
    ),
  }));

  const animatedTitleStyle = useAnimatedStyle(() => ({
    opacity: animationStatus.value,
  }));

  useEffect(() => {
    animationStatus.value = withTiming(isSelected ? 1 : 0);
  }, [isSelected]);

  return (
    <AnimatedPressable
      style={[styles.container, animatedPressableStyle]}
      {...rest}
    >
      <Feather name={icon} size={18} />
      <Animated.Text style={[styles.title, animatedTitleStyle]}>
        {title}
      </Animated.Text>
    </AnimatedPressable>
  );
}
