import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TouchableNativeFeedback,
    Image,
    TouchableOpacity,
    Text,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconVer from 'react-native-vector-icons/Fontisto';
import SwitchToggle from 'react-native-switch-toggle';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';

import { connect } from 'react-redux';

import * as actions from '../actions/index';

class Header extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../images/mattew_jordan.png')} style={{ height: 80, width: 80, marginLeft: 20, marginRight: 20 }} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Good Morning !!</Text>
                    <TouchableOpacity style={{ height: null, width: 100, borderRadius: 25, backgroundColor: 'blue', paddingTop: 8, paddingBottom: 8, marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



class DrawerNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOn1: false,
            switchOn2: false,
            switchOn3: false

        }
    }

    thayMode = () => {
        this.props.changeMode()
    }

    onPress1 = () => {
        this.setState({ switchOn1: !this.state.switchOn1 });
    }

    onPress2 = () => {
        this.setState({ switchOn2: !this.state.switchOn2 });
    }

    onPress3 = () => {
        this.setState({ switchOn3: !this.state.switchOn3 });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.props.stateChanged ? 'white' : 'rgba(0,0,0,0.8)' }}>

                {/* Phần Header */}
                <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../images/mattew_jordan.png')} style={{ height: 80, width: 80, marginLeft: 20, marginRight: 20 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color:this.props.stateChanged? 'black':'white', fontSize: 20, fontWeight: 'bold', marginTop:10 }}>Good Morning !!</Text>
                            <TouchableOpacity style={{ height: null, width: 100, borderRadius: 25, backgroundColor: 'rgba(0,0,255,0.6)', paddingTop: 8, paddingBottom: 8, marginTop: 10 }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Phần Body */}
                <View style={{ flex: 2, backgroundColor: 'transparent' }}>
                    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                        <Text style={{ marginLeft: 20, fontSize: 24, fontWeight: 'bold', color: this.props.stateChanged ? 'black' : 'white' }}>Favorite Apps</Text>
                        <View style={{ height: 1, width: '80%', backgroundColor: 'rgba(192,192,192,0.5)', marginLeft: 20, marginTop: 5, elevation: 3 }}></View>

                        <TouchableNativeFeedback style={{}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginTop: 10 }}>
                                <Icon name={'camera'} size={20} color={this.props.stateChanged ? 'rgba(rgba(0,0,0,0.6)' : 'white'} style={{ marginLeft: 50 }}></Icon>
                                <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', color: 'rgba(192,192,192,1)', marginLeft: 100 }}>Camera</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback style={{}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
                                <Icon name={'flipboard'} size={20} color={this.props.stateChanged ? 'rgba(rgba(0,0,0,0.6)' : 'white'} style={{ marginLeft: 50 }}></Icon>
                                <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', color: 'rgba(192,192,192,1)', marginLeft: 100 }}>Gallery</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback style={{}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
                                <Icon name={'facebook'} size={20} color={this.props.stateChanged ? 'rgba(rgba(0,0,0,0.6)' : 'white'} style={{ marginLeft: 50 }}></Icon>
                                <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', color: 'rgba(192,192,192,1)', marginLeft: 100 }}>FaceBook</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback style={{}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
                                <Icon name={'gofore'} size={20} color={this.props.stateChanged ? 'rgba(rgba(0,0,0,0.6)' : 'white'} style={{ marginLeft: 50 }}></Icon>
                                <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', color: 'rgba(192,192,192,1)', marginLeft: 100 }}>Google</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <TouchableNativeFeedback style={{}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
                                <IconVer name={'earth'} size={20} color={this.props.stateChanged ? 'rgba(rgba(0,0,0,0.6)' : 'white'} style={{ marginLeft: 50 }}></IconVer>
                                <Text style={{ position: 'absolute', fontSize: 20, fontWeight: 'bold', color: 'rgba(192,192,192,1)', marginLeft: 100 }}>Internet</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>

                {/* Phần Setting */}
                <View style={{ flex: 2, backgroundColor: 'transparent' }}>
                    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                        <Text style={{ marginLeft: 20, fontSize: 24, fontWeight: 'bold', color: this.props.stateChanged ? 'black' : 'white' }}>Settings</Text>
                        <View style={{ marginBottom: 10, height: 1, width: '80%', backgroundColor: 'rgba(192,192,192,0.5)', marginLeft: 20, marginTop: 5, elevation: 3 }}></View>

                        <View style={{ backgroundColor: 'transparent', height: null, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'column', marginLeft: 60 }}>
                                <Text style={{ color: this.props.stateChanged ? 'black' : 'white', fontWeight: 'bold', fontSize: 18 }}>NavBar</Text>
                                <Text style={{ color: this.props.stateChanged ? 'gray' : 'rgba(192,192,192,1)', fontSize: 14 }}>Go to dark mode on your app !!</Text>
                            </View>
                            <SwitchToggle
                                containerStyle={{
                                    width: 60,
                                    marginRight: 30,
                                    height: 30,
                                    borderRadius: 25,
                                    backgroundColor: '#ccc',
                                    padding: 5,
                                }}
                                circleStyle={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 19,
                                    backgroundColor: 'white',
                                }}
                                switchOn={this.state.switchOn1}
                                onPress={this.onPress1}
                                circleColorOff='white'
                                circleColorOn='rgba(0,0,255,0.7)'
                                duration={500}
                            />
                        </View>

                        <View style={{ backgroundColor: 'transparent', height: null, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'column', marginLeft: 60 }}>
                                <Text style={{ color: this.props.stateChanged ? 'black' : 'white', fontWeight: 'bold', fontSize: 18 }}>Dark Mode</Text>
                                <Text style={{ color: this.props.stateChanged ? 'gray' : 'rgba(192,192,192,1)', fontSize: 14 }}>Go to dark mode on your app !!</Text>
                            </View>
                            <SwitchToggle
                                containerStyle={{
                                    width: 60,
                                    marginRight: 30,
                                    height: 30,
                                    borderRadius: 25,
                                    backgroundColor: '#ccc',
                                    padding: 5,
                                }}
                                circleStyle={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 19,
                                    backgroundColor: 'white',
                                }}
                                switchOn={this.props.stateChanged}
                                onPress={this.thayMode}
                                circleColorOff='white'
                                circleColorOn='rgba(0,0,255,0.7)'
                                duration={500}
                            />
                        </View>

                        <View style={{ backgroundColor: 'transparent', height: null, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'column', marginLeft: 60 }}>
                                <Text style={{ color: this.props.stateChanged ? 'black' : 'white', fontWeight: 'bold', fontSize: 18 }}>Wi-fi</Text>
                                <Text style={{ color: this.props.stateChanged ? 'gray' : 'rgba(192,192,192,1)', fontSize: 14 }}>Go to dark mode on your app !!</Text>
                            </View>
                            <SwitchToggle
                                containerStyle={{
                                    width: 60,
                                    marginRight: 30,
                                    height: 30,
                                    borderRadius: 25,
                                    backgroundColor: '#ccc',
                                    padding: 5,
                                }}
                                circleStyle={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 19,
                                    backgroundColor: 'white', // rgb(102,134,205)
                                }}
                                switchOn={this.state.switchOn3}
                                onPress={this.onPress3}
                                circleColorOff='white'
                                circleColorOn='rgba(0,0,255,0.7)'
                                duration={500}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}>
                            <View style={{ flexDirection: 'row-reverse', backgroundColor: 'transparent', height: 50, alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'rgba(192,192,192,1)', marginRight: 30, marginLeft: 10 }}> Back</Text>
                                <Ionicon name={'ios-arrow-back'} size={18} color={'rgba(192,192,192,1)'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStatetoProps = state => ({
    stateChanged: state.stateChanged
});

export default connect(mapStatetoProps, actions)(DrawerNavigation);

// this.props.stateChanged ? 'white' : 'rgba(0,0,0,0.8)'
// this.props.stateChanged?'gray': 'white'
// this.props.stateChanged?'black': 'white'