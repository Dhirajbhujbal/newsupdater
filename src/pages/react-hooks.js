import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, Button, ScrollView  } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { AppNavigationConstant } from '../navigators/navigation.constant';

// const intialState = {
//     firstCounter: 0,
//     secondCounter: 0
// };

// const reducer = (currentState, actions) => {
//     switch(actions.type) {
//         case 'Increment':
//             return {...currentState, firstCounter: currentState.firstCounter + actions.value};
//         case 'Decrement':
//             return {...currentState, firstCounter: currentState.firstCounter - actions.value};
//         case 'Increment2':
//             return {...currentState, secondCounter: currentState.secondCounter + actions.value};
//         case 'Decrement2': 
//             return {...currentState, secondCounter: currentState.secondCounter - actions.value};
//         case 'Reset':
//             return intialState;
//         default:
//             currentState;
//     }
// }


export const ReactHOOKS = (props) => {

    // const [newState, dispatch] = useReducer(reducer, intialState);

    // const [userData, setUserData] = useState([]);
    // const [id, setId]= useState(1)

    // useEffect( () => {

    //     console.log('called',)
    //     fetch(`https://jsonplaceholder.typicode.com/posts`).then( (response) => {
    //         return response.json();
    //     }).then( (response) => {
    //         setUserData(response)
    //     })
    // }, [id])

    // const [name, setName] = useState({ firstName: '', lastName: ''});
    // const [count, setCount] = useState(0);
    // let [bgColor, setBgColor] = useState('green')

    // useEffect( () => {
    //     console.log('bg color called');
    //     setBgColor(bgColor = 'red');
    // },[]); 

    // useEffect( () => {
    //     console.log('called on update');
    //     // if(bgColor === 'red') {
    //     //     bgColor = 'green'
    //     // } else {
    //     //     bgColor = 'red'
    //     // }
    // }, [count])

    // let myref = React.createRef()
    // let myref2 = React.createRef()
    // console.log(' this is called')
    // const [count, setCount] = useState(0);
    // const [color, setColor] = useState('red')
    // const [fruits, setFruits] = useState(['Apple', 'Graps', 'banana', 'Lemon', 'Orange']);
    // const [inputTextValue, setInputTextValue] = useState('');

    // addFruits = () => { 
    //     setFruits([...fruits, inputTextValue])
    // }

    // updateTheValue = (event) => {
    //     setInputTextValue(event)
    // }

    // useEffect( () => {
    //     console.log('called ----')
    //     // setFruits([...fruits, 'Peru'])

    //     myref.current.focus()
    // },[fruits]);

    return(
        <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>

            <Button title={'Use State Hook Demo'} onPress={ () => props.navigation.navigate(AppNavigationConstant.routesConstant.UseStateHook)}/>

            <Button title={'Use State and Effect Hook Demo'} onPress={ () => props.navigation.navigate(AppNavigationConstant.routesConstant.UseEffectAndStateHook)}/>

            <Button title={'Use Context'} onPress={ () => props.navigation.navigate(AppNavigationConstant.routesConstant.ParentCompoent)}/>

            <Button title={'Use Reducer'} onPress={ () => props.navigation.navigate(AppNavigationConstant.routesConstant.UseReducerHook)}/>

            <Button title={'Use Memo Hook'} onPress={ () => props.navigation.navigate(AppNavigationConstant.routesConstant.UseMemoHook)}/>

            <Button title={'Use Suspense'} onPress={ () => props.navigation.navigate(AppNavigationConstant.routesConstant.UseSuspense)}/>


           {/* <Text>My Header</Text>

            <Text>
                First Counter : {newState.firstCounter}
            </Text>

            <Text>
                Second Counter : {newState.secondCounter}
            </Text>

            <Button title={'Increment'} onPress={ () => dispatch({type:'Increment', value: 1 })} />
            <Button title={'Decrement'} onPress={ () => dispatch({type:'Decrement', value: 1})}/>

            <Button title={'Increment 2'} onPress={ () => dispatch({type:'Increment2', value: 10})} />
            <Button title={'Decrement 2'} onPress={ () => dispatch({type:'Decrement2', value: 10})}/>

            <Button title={'Reset'} onPress={ () => dispatch({type:'Reset'})} /> */}
            
            
            {/* <ScrollView style={{flex:1, width:'100%'}}>
                {
                    userData && 
                    userData.map( (obj, index) => {
                        return(
                        <Text>{index}</Text>
                        )
                    })

                }
            </ScrollView>
             */}

            {/* <TextInput value={name.firstName} onChangeText={ (text) => setName({...name, firstName: text})} placeholder={'Enter First Name'}/>

            <TextInput value={name.lastName} onChangeText={ (text) => setName({...name, lastName: text})} placeholder={'Enter last Name'}/>

            <Text>{name.firstName}</Text>
            <Text>{name.lastName}</Text>


            <Text>{count}</Text>
            <Button onPress={ () => setCount( (previousState) => previousState+1) } title={'Increment'} /> */}

            {/* <Text>My Header</Text>
            

            <Button onPress={ () => addFruits()} title='Add Fruits'/>
            <TextInput ref={myref2} value={inputTextValue} onChangeText={ (event) => updateTheValue(event) } placeholder={'Please enter some value'}/>

            <TextInput ref={myref} value={inputTextValue} onChangeText={ (event) => updateTheValue(event) } placeholder={'Please enter some value'}/>
            <FlatList 
                data={fruits}
                renderItem={ (item) => {
                    return(
                        <Text>{item.item}</Text>
                    )
                }}
            /> */}
    
        </View>
    )
}