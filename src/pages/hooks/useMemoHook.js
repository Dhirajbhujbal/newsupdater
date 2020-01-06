import React, { useMemo, useState } from 'react';
import { View, Text, Button } from 'react-native';

export const UseMemoHook = () => {

    const array = new Array(10000);
    const [counter1, setCount1] = useState(0);
    const [counter2, setCount2] = useState(0);

    const callMe = useMemo (() => {
        for(var i = 0; i < array.length; i++ ) {
            console.log(i)
        }
        return array.length;
    }, [counter1])

    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            <Text>{`Total Count is  ${callMe}`}</Text>
            <Text>Counter 1 : {counter1}</Text>
            <Text>Counter 2 : {counter2}</Text>
            <Button title='Increment counter 1 by 1' onPress={ () => setCount1( (prevState) => prevState + 1 ) } />
            <Button title='Increment counter 2 by 1' onPress={ () => setCount2( (prevState) => prevState + 1 )}/>
        </View>
    )

}
