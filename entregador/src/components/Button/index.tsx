import React from "react";

import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";

type props = TouchableOpacityProps & {
  title: string;
};

export default function Button({ title, ...rest }: props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
