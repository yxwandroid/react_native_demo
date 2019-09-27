import React, {Component} from 'react';
import Item from './Item';
import Likes from './Likes';
import {
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native';


export default class ComponentDemo extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView>
            <View style={styles.container}>
                <Item/>
                <Likes/>
            </View>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: 'red',
            margin: 20,
        },

    })
;

