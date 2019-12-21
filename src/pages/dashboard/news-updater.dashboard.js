import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { AppNavigationConstant } from '../../navigators/navigation.constant';
import { AppHeader } from '../header/app-header';
import { dashboardStyle } from './dashboard.style';
import AppNewsUpdaterCards from './component/news-updater.cards';
// import { AppContext } from '../../db/app-context.data';

export class AppDashboard extends Component {

    // static contextType = AppContext

    style = dashboardStyle();

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <>
                <AppHeader enableBackImage={false} screenName={'NY Times Most Popular'} />
                <View style={this.style.dashboardParrentView}>
                    <AppNewsUpdaterCards {...this.props} />
                </View>
            </>
            
        )
    }

}