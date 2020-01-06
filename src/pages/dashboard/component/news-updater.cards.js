
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Modal, ActivityIndicator } from 'react-native';
import { moderateScale } from '../../scale';
import forwordImage from '../../../assets/images/forword.png';
import calenderImage from '../../../assets/images/calender.png';
import { AppNavigationConstant } from '../../../navigators/navigation.constant';
import { loadNewsData, getUpdatedNewsData } from '../../../store/actions/app-actions';
import { connect } from 'react-redux';
import { dashboardStyle } from '../dashboard.style';

class AppNewsUpdaterCards extends Component{
    
    style = dashboardStyle()

    constructor(props) {
        super(props);
        this.state = {
            newsData: [],
            isRefreshingDone: false
        }
    }

    checkForNewNews = () => {
        this.props.getUpdatedNewsData()
    }

    componentDidMount() {
        this.props.loadNewsData();
    }

    render() {
        return(
            <>
            <Modal
                transparent={true}
                visible={this.props.displaySpinner}
            >
                <View style={this.style.modalViewStyle}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>   
            </Modal>    
            <FlatList 
                data={this.props.newsData}
                renderItem={ (item) => {
                    return(
                        <View style={this.style.flatListView}>
                            <View style={this.style.flatListViewA}>
                                <View style={this.style.innerFlatListViewA}>
                                    <View style={this.style.innerFlatListLeftView} />
                                </View>
                                <View style={this.style.innerFlatListViewB}>
                                    
                                    <Text numberOfLines={2} style={this.style.newsHeaderText}>
                                        {item.item.title}
                                    </Text>
                                    <Text numberOfLines={2} style={this.style.newsDescriptionText}>
                                        {item.item.abstract}
                                    </Text>
                                    <View style={this.style.newsDetailsViewA}>
                                        <View style={{ flex:0.6, padding:moderateScale(2)}}>
                                            <Text style={this.style.autherText}>
                                                {item.item.byline}
                                            </Text>
                                        </View>
                                        <View style={this.style.newsDetailsViewB}>
                                            <Image source={calenderImage} style={this.style.calenderImageView} />
                                            <Text numberOfLines={1} style={this.style.dateText}>
                                                {
                                                    item.item.published_date.split('T')[0]
                                                }
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={this.style.innerFlatListViewC} >
                                    <TouchableOpacity style={this.style.buttonImage}
                                        onPress={ () => this.props.navigation.navigate(AppNavigationConstant.routesConstant.NEWS_DETAILS, {newsItemId: item.item})}
                                    >
                                        <Image source={forwordImage} style={this.style.fowrwordIconImageView} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={ (item) => {
                    return Math.random().toString()
                }}
                refreshing={this.state.isRefreshingDone}
                onRefresh={ () => this.checkForNewNews()}
            />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        newsData: state.appData,
        displaySpinner: state.displaySpinner
    }

}

export default connect(mapStateToProps, { loadNewsData, getUpdatedNewsData } )(AppNewsUpdaterCards)