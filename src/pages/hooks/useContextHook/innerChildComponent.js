import React, { useContext } from 'react';
import { View , Text } from 'react-native';
import { MyContext } from './parentComponent';


export const InnerChildCommpoent = () => {

    const myContextData = useContext(MyContext);


    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            <Text>Inner Child component is loaded</Text>
            <Text>
                {
                    myContextData.fName+ ' ' + myContextData.lName
                }
            </Text>
        </View>
    )
}