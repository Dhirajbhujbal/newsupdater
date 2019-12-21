import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import backImage from '../../assets/images/back.png';
import menuIconImage from '../../assets/images/menu-icons.png';
import searchImage from '../../assets/images/search.png';
import rightMenuImage from '../../assets/images/rightMenu.png';
import { headerStyle } from './app-header.style';
import { moderateScale } from '../scale';

export class AppHeader extends Component {

    style = headerStyle();

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SafeAreaView>
                <View style={[this.style.parentView, { backgroundColor: (this.props.enableBackImage) ? 'white' : 'rgb(63,224,208)'}]}>
                    <View style={this.style.childLeftView}>
                        {
                            this.props.enableBackImage ? 
                            <TouchableOpacity onPress={ () => this.props.navigation.goBack()}>
                                <Image source={backImage} style={[this.style.imageStyle, { width:moderateScale(10)}]} />
                            </TouchableOpacity> : 
                            <TouchableOpacity>
                                <Image  source={menuIconImage} style={this.style.childViewLeft}/>
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={this.style.childViewCenter}>
                        <Text style={this.style.headerText}>{this.props.screenName}</Text>
                    </View>
                    <View style={this.style.childRightView}>
                        {
                            this.props.enableBackImage? null:
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity style={{ marginRight: moderateScale(20)}}>
                                    <Image source={searchImage} style={this.style.imageStyle} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={rightMenuImage} style={this.style.imageStyle} />
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                </View>
            </SafeAreaView>
        )
    }

}