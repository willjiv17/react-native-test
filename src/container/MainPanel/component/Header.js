import React from 'react';
import {View, Text} from 'react-native';

const styles = {
    headerStyle: {
        backgroundColor: "#4477ee",
        width: "100%",
        marginBottom: 30
    },
    textStyle: {
        fontSize: 50,
        color: "white",
        textAlign: "center"
    }    
}

const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{"Tic Tac Toe"}</Text>
        </View>
    )
}

export default Header;