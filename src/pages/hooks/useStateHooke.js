import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';


export const UseStateHook = () => {

    const [count, setCount] = useState(0);

    return (

        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text style={{ fontWeight: 'bold'}}>{count}</Text>

                <Button title={'Increment By 1'} onPress={ () => setCount( (prevState) => prevState + 1 )}/>

                <Button title={'Decrement By 1'} onPress={ () => setCount( (prevState) => prevState - 1 )}/>

                <Button title={'Reset'} onPress={ () => setCount( (prevState) => prevState = 0 )}/>
        </View>


    )


}