import React, { useState, useEffect } from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import { moderateScale } from '../scale';
import { TextInput } from 'react-native-gesture-handler';


export const UseEffectAndStateHook = () => {

    const [posts, setPosts] = useState([]);

    // useEffect for API calls this treats as the Commponent did mount as becase of empty []
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts/').then( (response) => {
            return response.json();
        }).then( (response) => {
            setPosts(response)
        }).catch( () => {
            setPosts([])
        })
    },[]);


    // useEffect is treated as the commounnetWillUnmount for cleanup
    useEffect( () => {
        const intervals = setInterval( () => {
            console.log('----called------')
        }, 1000);

        return () => {
            clearInterval(intervals);
        }
    })

    

    return (

        <>
            
            <Button title={'Add New Post'} onPress={ () => {
                setPosts([...posts, {
                    userId: 1,
                    id: 1,
                    title: "New Update",
                    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
                    }])
            }} />

            <ScrollView style={{ flex:1}}>
                {
                    posts.map( (obj, index) => {

                        return(
                            <>
                                <View style={{ flexDirection:'row', flex:1}}>
                                    <View style={{ padding:moderateScale(10) , flex:2 , justifyContent:'center', alignItems:'center' }}>
                                        <Text style={{ fontWeight:'bold'}}>{obj.title}</Text>
                                    </View>
                                </View>
                            </>
                        )

                    })

                }
            </ScrollView>
        </>

    )


}