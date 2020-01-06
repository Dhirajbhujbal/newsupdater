import React, { useContext } from 'react';
import { View , Text } from 'react-native';
import { MyContext } from './parentComponent';



export const Child1Component = () => {
    
    const myContextData = useContext(MyContext);

    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            <Text>Child 1 is loaded</Text>
            <Text>
                {
                    myContextData.fName+ ' ' + myContextData.lName
                }
            </Text>
        </View>
    )
}