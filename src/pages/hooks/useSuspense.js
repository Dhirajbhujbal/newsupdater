// const delay = () => new Promise(resolve => setTimeout(() => {

//     return resolve(fetch('https://jsonplaceholder.typicode.com/posts/').then( (response) => {
//         return response.json();
//     }).then( (response) => {
//         return response;
//     }));
// }
// , 4000));

import React, { Suspense, useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { moderateScale } from '../scale';

const MyComp =  React.lazy(() => {
    return(<View>
            <Text>{'I am loaded'}</Text>
        </View>
    )
})


export const UseSuspense = () => {
    
    const [userData, setUserData] = useState([]);
    
    useEffect( () => {
        // console.log('------- called -----')
        delay().then( (response) => {
            setUserData(response);
        })
    },[])

    return( <>

            <Suspense fallback={<Text>{'Called'}</Text>}>
                <MyComp />
            </Suspense>


            {/* <ScrollView style={{ flex:1}}>
                {
                    userData.map( (obj, index) => {

                        return(
                            <>
                                <View style={{ flexDirection:'row', flex:1}}>
                                    <View style={{ padding: moderateScale (10) , flex:2 , justifyContent:'center', alignItems:'center' }}>
                                        <Text style={{ fontWeight:'bold'}}>{obj.title}</Text>
                                    </View>
                                </View>
                            </>
                        )

                    })

                }
            </ScrollView> */}
        
        </>
    )
}