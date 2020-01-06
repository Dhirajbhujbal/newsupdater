import React, { useReducer } from 'react';
import { View, Button, Text } from 'react-native';

const initialState = 0;


const initalUserData = [];

const reducer = (state, action) => {

    switch(action) {

        case 'Increment': 
            return state + 1;

        case 'Decrement': 
            return state - 1;
        
        case 'Reset':
            return initialState;
        
        default:
            return state;

    }

}

const userDataReducer = (currentState, action) => {

    switch(action) {

        case 'AddNewUser': 
            return [...currentState, {fName:'Dhiraj', lName:'Bhujbal'} ] 
    
        case 'ResetState':
            return initalUserData;
        
        default:
            return currentState;

    }

}



export const UseReducerHook = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [userData, updateUserData] = useReducer(userDataReducer, initalUserData)

    return(
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            <Text>{state}</Text>
            <Button title='Increment by 1' onPress={ () => dispatch('Increment')} />
            <Button title='Decremnt by 1' onPress={ () => dispatch('Decrement')}/>
            <Button title='Reset' onPress={ () => dispatch('Reset')} />
            
            <View>

                
                <Button title='Add New User' onPress={ () => updateUserData('AddNewUser')} />

                <Button title='Reset' onPress={ () => updateUserData('ResetState')} />

                {
                    userData &&
                    userData.map( (obj, index) => {
                       return <>
                            <Text>{JSON.stringify(obj)}</Text>
                       </>;
                    })
                }

            </View>
        </View>
    )

}


/* 
    use reducer is the functionallity work same as the reduce funtion in array
    
    Array Reducer

        : Reduce method on an array perform reduce function on each element of an array
        This 'reduce' function takes two argument 
            1st is accumulator or we can call it as the total value 
            
            and 
             
            2nd is the itreated value

        we can call this reduce function as the first argument and the initial value as the second arugment which is optinal

        
        var a = [1,2,3,4,5,6,7,8,9,10]
        const reducerFun = (total, currentValue) => total+currentValue;
        var temp = a.reduce(reducerFun, 0);


    Above same concept is taken by the Hook UseReducer as it takes the two arguments as 
    currentState and action
    useReducer returns us the two values thoese are the newState and the dispatch (nothing but the action name).

*/
