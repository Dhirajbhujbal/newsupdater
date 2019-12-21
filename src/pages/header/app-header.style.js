import { StyleSheet } from 'react-native';
import { moderateScale } from '../scale';


export const headerStyle = () => {

    return StyleSheet.create({

        parentView: {
            paddingVertical: moderateScale(15), 
            flexDirection:'row', 
            paddingHorizontal: moderateScale(15)
        },

        imageStyle: { 
            height: moderateScale(20),
            width:moderateScale(20)
        },

        childViewCenter: {
            flex: 0.99, 
            justifyContent: 'center', 
            alignItems: 'center'
        },

        childLeftView: {
            justifyContent:"center", alignItems:'center'
        },

        headerText: { 
            fontSize: moderateScale(20), 
            fontWeight: 'bold' 
        },

        childRightView: { 
            flex:0.02, 
            marginRight:moderateScale(18), 
            justifyContent:"center", 
            alignItems:'center'
        }

    });

}
