import React, { useContext } from 'react';
import { View , Text } from 'react-native';
import { InnerChildCommpoent } from './innerChildComponent';
import { MyContext } from './parentComponent';

export const Child2Component = () => {
    
    const myContextData = useContext(MyContext);


    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            <Text>Child 2 is loaded</Text>
            <Text>
                {
                    myContextData.fName+ ' ' + myContextData.lName
                }
            </Text>
            <InnerChildCommpoent />
        </View>
    )
}