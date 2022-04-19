import {
  StyleSheet,
  View,
  ViewStyle,
  Animated
} from 'react-native';
import React, { ReactChild, ReactChildren, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { THEMES } from '../helper';
import { useInset } from '../hook';
interface IProps {
  style?: ViewStyle;
  children: ReactChild | ReactChildren;
}

export const BaseView = React.memo((props: IProps) => {
  const theme = useSelector(state => state.util.theme);
  const backgroundAnim = useRef(new Animated.Value(0)).current;
  const colorBackgroundAnimation = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [THEMES.LIGHT.backgroundColor, THEMES.DARK.backgroundColor],
  });

  const inset = useInset();

  useEffect(() => {
    Animated.timing(backgroundAnim, {
      useNativeDriver: false,
      duration: 300,
      toValue: theme ? 1 : 0,
    }).start();
  }, [theme])

  const { children, style } = props;
  const insetTop = {
    paddingTop: inset.top
  }
  const backgroundTheme = {
    backgroundColor: colorBackgroundAnimation
  }
  return <Animated.View {...props} style={[style, backgroundTheme, insetTop]}>{children}</Animated.View>;
})

const styles = StyleSheet.create({});
