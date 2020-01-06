import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Child2Component } from './child2Component';
import { Child1Component } from './child1Component';
import { MyTestComponent } from './myTestComponent';

export const MyContext = React.createContext();

const PersonDetails = {
    fName: 'John',
    lName: 'Smith'
}

export const ParentCompoent = () => {
    return(
        <>
        
        <MyContext.Provider value={PersonDetails}>
            <Text>Parent is loaded</Text>
            <MyTestComponent />
            <Child1Component />
            <Child2Component />
        </MyContext.Provider>
        </>
    )
}