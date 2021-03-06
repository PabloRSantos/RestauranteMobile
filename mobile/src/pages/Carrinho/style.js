import styled from "styled-components/native"
import {getStatusBarHeight} from "react-native-status-bar-height"

export const Main = styled.View`
    padding: ${getStatusBarHeight() + 10 + `px`} 0 0;
    flex: 1;


`
export const Back = styled.TouchableOpacity`
    margin: 0 0 10px 15px ;
`

export const Content = styled.View`
    flex: 1;

    justify-content: space-between;
`

export const PrecoTotal = styled.Text`
    color: #008577;
    font-family: "Roboto-Medium";
    font-size: 18px;
    text-align: center;
    margin-bottom: 5px;
`

export const Button = styled.TouchableOpacity`
    background-color: #008577;

    justify-content: center;

    border-radius: 15px;

    padding: 7px 0;

    width: 60%;
    margin: 0 auto 20px;
`

export const TextButton = styled.Text`
    color: white;
    font-family: "Roboto-Bold";
    font-size: 18px;
    text-align: center;
`

export const ContentBottom = styled.View`
`