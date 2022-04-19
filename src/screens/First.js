import { StyleSheet, Text, View, useColorScheme, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UtilTypes } from '../redux';
import { colors } from '../helper/colors';
import NavigationService from '../navigation/navigationServices';
import { Route } from '../contanst';
import { normalize } from '../helper';
import { MODE } from '../enum';

export const First = () => {
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();
    const systemTheme = colorScheme == 'dark' ? MODE.DARK : MODE.LIGHT
    useEffect(() => {
        dispatch({ type: UtilTypes.CHANGE_THEME, payload: systemTheme });
        setTimeout(() => {
            NavigationService.replace(Route.LOGIN)
        }, 3000);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.wrapLoading}>
                <ActivityIndicator
                    size={'large'}
                    color={'gray'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#00000080', alignItems: 'center', justifyContent: 'center' },
    wrapLoading: {
        backgroundColor: "#00000090",
        height: normalize(120),
        aspectRatio: 1,
        justifyContent: 'center',
        borderRadius: 8
    }
})