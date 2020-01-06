import { StyleSheet } from 'react-native';
import { moderateScale } from '../scale';

export const dashboardStyle = () => {

    return StyleSheet.create({

        dashboardParrentView :{ 
            flex: 1,
            backgroundColor: 'rgb(238,242,242)'
        },

        modalViewStyle: {
            flex:1, 
            justifyContent:'center', 
            alignContent:'center'
        },

        flatListView: { 
            flex:1, 
            marginTop: moderateScale(5)
        },

        flatListViewA: { 
            borderRadius: moderateScale(12), 
            flexDirection:'row' 
        },

        innerFlatListViewA: {
            justifyContent:'center', 
            alignItems:'center'
        },

        innerFlatListLeftView: {
            marginLeft: moderateScale(28), 
            backgroundColor:'gray', 
            height: moderateScale(50), 
            width: moderateScale(50), 
            borderRadius: moderateScale(40)
        },

        innerFlatListViewB: {
            flex:3, 
            marginLeft: moderateScale(28), 
            marginVertical: moderateScale(20)
        },

        innerFlatListViewC: { 
            flex:1, 
            justifyContent:'center', 
            alignItems:'center'
        },

        fowrwordIconImageView: { 
            height: moderateScale(19), 
            width: moderateScale (9)
        },

        buttonImage: {
            padding: moderateScale(20)
        },

        newsHeaderText: { 
            fontSize: moderateScale(13), 
            fontWeight: 'bold', 
            color: 'black'
        },

        newsDescriptionText: {
            fontSize: moderateScale(13), 
            marginTop: moderateScale(10), 
            color: 'rgb(71,75,86)'
        },

        newsDetailsViewA: {
            flex:1,
            flexDirection:'row', 
            justifyContent:'space-between'
        },

        newsDetailsViewB: { 
            flex:0.4, 
            flexDirection:'row', 
            alignItems:'center', 
            justifyContent:'center'
        },

        calenderImageView: {
            height: moderateScale(15), 
            width: moderateScale(14)
        },

        autherText: {
            marginTop: moderateScale(5),
            fontSize: moderateScale(12)
        },

        dateText: { 
            margin: moderateScale(5),
            fontSize: moderateScale(12)
        }
    });

}
