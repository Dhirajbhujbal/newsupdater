
import { createStackNavigator } from 'react-navigation-stack';
import { AppNavigationConstant } from './navigation.constant';
import { AppDashboard } from '../pages/dashboard/news-updater.dashboard';
import { AppNewsDetails } from '../pages/newsdetails/news-updater.news.details';

export class AppNavigations {
    static Nav () {
        return createStackNavigator({
            [AppNavigationConstant.routesConstant.DASHBOARD] : AppDashboard,
            [AppNavigationConstant.routesConstant.NEWS_DETAILS] : AppNewsDetails
        }, {
            initialRouteName: AppNavigationConstant.routesConstant.DASHBOARD,
            headerMode: "none"
        })
    }
}