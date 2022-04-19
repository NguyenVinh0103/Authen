import { StyleSheet, TextStyle, TextInput, ImageStyle, ViewStyle, TouchableOpacity, TextInputProps, Animated, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { INPUT_HEIGHT, MARGIN_LARGE_HORIZONTAL, MARGIN_X_LARGE_HORIZONTAL, MARGIN_X_X_X_LARGE, MODE } from '../enum';
import FastImage, { Source } from 'react-native-fast-image';
import { IC_EMAIL, IC_SHOW_PASS } from '../assets'
import { normalizeHorizontal, shadow, THEMES } from '../helper';
import { useSelector } from 'react-redux';

const AnimatedFastImage = Animated.createAnimatedComponent(Image);
const TextInputAnimated = Animated.createAnimatedComponent(TextInput);

interface InputProps {
    textStyle?: TextStyle,
    iconStyle?: ImageStyle,
    containerStyle?: ViewStyle,
    tintColor?: number | string,
    iconLeft: Source,
    iconRight?: Source,
    isRight?: boolean,
    isShowPassword?: boolean,
    setIsShowPass?: (e: boolean) => void
}
const InputComp = (props: TextInputProps & InputProps) => {

    const {
        style = {},
        iconStyle = {},
        containerStyle = {},
        iconLeft = IC_EMAIL,
        iconRight = IC_SHOW_PASS,
        isRight = false,
        isShowPassword = false,
        setIsShowPass = () => { }
    } = props;
    const theme = useSelector(state => state.util.theme);
    ////BACKGROUND
    const backgroundAnim = useRef(new Animated.Value(0)).current;
    const colorBackgroundAnimation = backgroundAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [THEMES.LIGHT.BACKGROUND_INPUT, THEMES.DARK.BACKGROUND_INPUT],
    });
    ////ICON    
    const imageAnim = useRef(new Animated.Value(0)).current;
    const colorImage = imageAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [THEMES.LIGHT.ICON_INPUT, THEMES.DARK.ICON_INPUT],
    });
    const backgroundContainerAniamtion = {
        backgroundColor: colorBackgroundAnimation
    }

    ///// PLACEHOLDER 
    const placeholderAnim = useRef(new Animated.Value(0)).current;
    const placeholderColor = placeholderAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [THEMES.LIGHT.TEXT_COLOR, THEMES.DARK.TEXT_COLOR],
    });

    const inputWidth = {
        width: !isRight ? '80%' : '70%',
        color: theme ? THEMES.DARK.TEXT_COLOR : THEMES.LIGHT.TEXT_COLOR
    }


    useEffect(() => {
        Animated.timing(backgroundAnim, {
            useNativeDriver: false,
            duration: 300,
            toValue: theme ? 1 : 0,
        }).start();
        Animated.timing(imageAnim, {
            useNativeDriver: false,
            duration: 300,
            toValue: theme ? 1 : 0,
        }).start();
        Animated.timing(placeholderAnim, {
            useNativeDriver: false,
            duration: 300,
            toValue: theme ? 1 : 0,
        }).start();
    }, [theme])

    return (
        <Animated.View style={[styles.container, containerStyle, backgroundContainerAniamtion,]}>
            <AnimatedFastImage
                source={iconLeft}
                style={[styles.icon, iconStyle, {
                    tintColor: colorImage
                }]}

            />
            <TextInputAnimated
                {...props}
                secureTextEntry={isShowPassword}
                style={[styles.tipContainer, style, inputWidth,]}
                placeholderTextColor={placeholderColor}
            />
            {isRight && <TouchableOpacity onPress={() => setIsShowPass(!isShowPassword)}>
                <FastImage
                    source={iconRight}
                    style={styles.iconRight}
                />
            </TouchableOpacity>}
        </Animated.View>
    )
}

export const Input = React.memo(InputComp);

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: MARGIN_X_X_X_LARGE,
        alignItems: 'center',
        borderRadius: 8,
        ...shadow
    },
    tipContainer: {
        height: INPUT_HEIGHT,
        width: '70%',
    },
    icon: {
        width: normalizeHorizontal(24),
        aspectRatio: 1,
        marginHorizontal: MARGIN_LARGE_HORIZONTAL,
    },
    iconRight: {
        width: normalizeHorizontal(24),
        aspectRatio: 30 / 21,
        marginLeft: MARGIN_X_LARGE_HORIZONTAL,
    }
})