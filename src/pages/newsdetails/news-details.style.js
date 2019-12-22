import { StyleSheet } from 'react-native';
import { moderateScale } from '../scale';

export const newsDetailsStyle = () => {

    return StyleSheet.create({

        outerViewStyle: { 
            flex: 1, 
            alignItems:'center', 
            marginHorizontal: moderateScale(12)
        },
        newsHeader : { 
            fontSize: moderateScale(17), 
            fontWeight:'bold' 
        },
        imageView  : { 
            height: moderateScale(400),
            width: '100%', 
            resizeMode:'contain' 
        },
        summaryText: { 
            fontSize: moderateScale(15), 
            fontStyle:'italic' 
        },

        detailsText: {
            fontSize: moderateScale(15), 
        }
    });

}
