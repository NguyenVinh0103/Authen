import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BaseView, Input } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_LOGO, IC_PASS } from '../../assets'
import FastImage from 'react-native-fast-image'
import { normalize } from '../../helper'
import { MARGIN_X_LARGE, MODE } from '../../enum'
import * as UtilsActions from '../../redux/action/UtilsActions'
export const Login = () => {
	const theme = useSelector(state => state.util.theme);
	const dispatch = useDispatch();
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [hello, setHello] = useState(null)
	const onPress = async () => {
		const inputTheme = theme == MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
		let hihi = "Quang vinh"
		const respone = await UtilsActions.demoCallApi(hihi, dispatch);
		console.log(respone)
		setHello(respone)
		// dispatch({ type: UtilTypes.CHANGE_THEME, payload: inputTheme })
	}
	return (
		<BaseView style={{
			alignItems: 'center',
			flex: 1,
		}}>
			<FastImage
				source={IMG_LOGO}
				style={{
					alignSelf: 'center',
					width: '100%',
					height: normalize(280),
				}}
				resizeMode={'contain'}
			/>
			<Input
				placeholder={hello?.title || 'email'}
				placeholderTextColor={'red'}
			/>
			<Input
				placeholder='Password'
				placeholderTextColor={'red'}
				iconLeft={IC_PASS}
				containerStyle={{
					marginTop: MARGIN_X_LARGE
				}}
				isRight
				isShowPassword={isShowPassword}
				setIsShowPass={onPress}
			/>
			
		</BaseView>
	)
}

const styles = StyleSheet.create({})