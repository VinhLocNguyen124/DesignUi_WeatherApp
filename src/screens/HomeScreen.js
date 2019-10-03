import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Text,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from 'react-navigation-drawer';
import DrawerLayout from './DrawerNavigation';
import { connect } from 'react-redux';


const topHeight = (Dimensions.get('window').height) / 2 - 30;

console.disableYellowBox = true;

class Header extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                <StatusBar barStyle="dark-content" backgroundColor='rgba(0,0,0,0)' translucent />
                <Image source={require('../images/city_scape.jpg')} style={{ height: '100%', width: '100%' }} />
            </View>
        );
    }
}

class Circle extends React.Component {
    render() {
        return (
            <View style={{ height: 70, width: 70, backgroundColor: this.props.stateChanged ? 'black' : 'white', borderRadius: 40, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={this.props.iconname} size={22} color='rgba(0,0,255,0.5)' />
            </View>
        );
    }
}

class MiniCircle extends React.Component {
    render() {
        return (
            <View style={{ height: 60, width: 60, backgroundColor: this.props.bgColor, borderRadius: 40, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={this.props.iconname} size={20} color={this.props.iconColor} />
            </View>
        );
    }
}

// class TextArea extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, marginLeft: 20, marginRight: 20, }}>
//                 <Text style={{ color: this.props.stateChanged ? 'white' : 'black', fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>TuesDay, Jan 30</Text>
//                 <Text style={{ color: 'gray', fontSize: 16 }}>If you're on an older React Native version, you need to manually link the dependencies. To do that, run</Text>
//             </View>
//         );
//     }
// }

class ButtonText extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,255,0.6)', width: 100, paddingVertical: 10, borderRadius: 40 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
bgBtnCall: ''
        }
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <View>

            </View>
        ),
        headerLeft: (
            <View>
                <TouchableOpacity style={{ marginLeft: 20, marginTop: 40 }}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon name={'bars'} size={20} color={'white'} />
                </TouchableOpacity>
            </View>

        ),
        headerRight: (
            <View>
                <TouchableOpacity style={{ marginRight: 20, marginTop: 40 }}>
                    <Icon name={'microphone'} size={20} color={'white'} />
                </TouchableOpacity>
            </View>
        ),
        headerBackground: (
            <View></View>
        ),
        headerStyle: {
            borderBottomWidth: 0,
            height: 100
        },
        headerTransparent: true
    });

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.props.stateChanged ? 'white' : 'rgba(0,0,0,0.8)' }}>

                {/* Phần Header */}
                <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                    <Header />
                </View>

                {/* Phần body */}
                <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 2, backgroundColor: 'transparent', flexDirection: 'column-reverse' }}>
                            <View style={{ flexDirection: 'row', height: null, justifyContent: 'space-around', marginBottom: 10 }}>
                                <View style={{ height: 70, width: 70, backgroundColor: this.props.stateChanged ? 'white' : 'dimgrey', borderRadius: 40, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name={'thermometer-full'} size={22} color={this.props.stateChanged ? 'rgba(0,0,255,0.5)' : 'white'} />
                                </View>
                                <View style={{ height: 70, width: 70, backgroundColor: this.props.stateChanged ? 'white' : 'dimgrey', borderRadius: 40, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name={'music'} size={22} color={this.props.stateChanged ? 'rgba(0,0,255,0.5)' : 'white'} />
                                </View>
                                <View style={{ height: 70, width: 70, backgroundColor: this.props.stateChanged ? 'white' : 'dimgrey', borderRadius: 40, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name={'address-card'} size={22} color={this.props.stateChanged ? 'rgba(0,0,255,0.5)' : 'white'} />
                                </View>
                                <View style={{ height: 70, width: 70, backgroundColor: this.props.stateChanged ? 'white' : 'dimgrey', borderRadius: 40, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name={'sticky-note'} size={22} color={this.props.stateChanged ? 'rgba(0,0,255,0.5)' : 'white'} />
                                </View>
                            </View>

                        </View>
                        <View style={{ flex: 1.5, backgroundColor: 'transparent' }}>
                            <View style={{ flex: 1, marginLeft: 20, marginRight: 20, }}>
                                <Text style={{ color: this.props.stateChanged ? 'black' : 'white', fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>TuesDay, Jan 30</Text>
                                <Text style={{ color: this.props.stateChanged ? 'gray' : 'white', fontSize: 16 }}>If you're on an older React Native version, you need to manually link the dependencies. To do that, run</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1.3, backgroundColor: 'transparent', flexDirection: 'column-reverse' }}>
                            <View style={{ width: '100%', height: null, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
                                <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,255,0.6)', width: 100, paddingVertical: 10, borderRadius: 40, elevation:5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Call</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor:this.props.stateChanged? 'white':'dimgrey', width: 100, paddingVertical: 10, borderRadius: 40, elevation:5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color:this.props.stateChanged? 'black':'white', textAlign: 'center' }}>Text</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: this.props.stateChanged? 'white':'dimgrey', width: 100, paddingVertical: 10, borderRadius: 40, elevation:5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color:this.props.stateChanged? 'black':'white', textAlign: 'center' }}>Email</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>

                {/* Phần khung giữa */}
                <View style={{ backgroundColor: 'transparent', width: '100%', position: 'absolute', height: null, justifyContent: 'center', alignItems: 'center', top: topHeight }}
                >
                    <View style={{ backgroundColor: this.props.stateChanged ? 'white' : 'dimgray', width: '90%', height: 80, borderRadius: 50, elevation: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, }}>
                        <MiniCircle iconname={'eye'} bgColor={'yellow'} iconColor={'yellow'} />
                        <MiniCircle iconname={'send'} bgColor={'rgba(0,0,255,0.6)'} iconColor={'white'} />
                        <View style={{ paddingLeft: 20, width: '100%', height: 80, backgroundColor: 'transparent', position: 'absolute', }}>
                            <View style={{ backgroundColor: '', flex: 1 }}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', marginLeft: 60, marginRight: 60, justifyContent: 'center' }}>
                                    <Text style={{ color: this.props.stateChanged ? 'black' : 'white', fontSize: 25, fontWeight: 'bold' }}
                                        onPress={() => {
                                            this.props.navigation.dispatch(DrawerActions.openDrawer())
                                        }}>It's now 32°F</Text>
                                    <Text style={{ color: this.props.stateChanged ? 'gray' : 'white', fontSize: 18, fontWeight: 'bold' }}>in Russia</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        );
    }
}

const mapStatetoProps = state => ({
    stateChanged: state.stateChanged
});

export default connect(mapStatetoProps, null)(HomeScreen);





