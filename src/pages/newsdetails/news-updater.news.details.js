import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { AppNavigationConstant } from '../../navigators/navigation.constant';
import { AppHeader } from '../header/app-header';
import { moderateScale } from '../scale';

export class AppNewsDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNewsData: this.props.navigation.getParam('newsItemId') // {"source":{"id":"cnbc","name":"CNBC"},"author":"Thomas Franck","title":"Analyst says FedEx plunge leaves bellwether vulnerable to the once unthinkable: an activist - CNBC","description":"FedEx's second-quarter results were so bad that it could spark interest among activist investors looking to turn the company around.","url":"https://www.cnbc.com/2019/12/18/fedex-face-plant-could-make-it-open-to-an-activist-investor.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/104180403-GettyImages-72778825.jpg?v=1576680511","publishedAt":"2019-12-18T16:58:00Z","content":"\"Face plant\" and \"awful\" aren't descriptors CEOs want to hear after reporting quarterly profit numbers.\r\nBut FedEx's second-quarter results were so bad the profit decline so steep that such severe language is not only justified, but it wouldn't be surprising … [+3510 chars]"}
        }
    }

    render() {
        return(
            <>
                <AppHeader {...this.props} enableBackImage={true} screenName={'News Details'} />
                <ScrollView>
                    <View style={{ flex: 1 , alignItems:'center' , marginHorizontal: moderateScale(12)}} >
                        <Text style={{ fontSize: moderateScale(17), fontWeight:'bold' }}>{this.state.selectedNewsData.title}</Text>
                        <Image source={{ uri: this.state.selectedNewsData.urlToImage}} 
                            style={{ height: moderateScale(400) ,width: '100%', resizeMode:'contain' }}
                        />
                        <Text>Summary</Text>
                        <Text style={{ fontSize: moderateScale(15), fontStyle:'italic' }}>
                         {this.state.selectedNewsData.description}
                        </Text>

                        <Text>Details</Text>
                        <Text style={{ fontSize: moderateScale(15), fontStyle:'italic' }}>
                         {this.state.selectedNewsData.content}
                        </Text>

                    </View>
                </ScrollView>
            </>
        )
    }

}