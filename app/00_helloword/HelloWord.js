import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
} from 'react-native';

export default class HelloWord extends Component {
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
                    <Text>hello word  </Text>
                </View>
            </SafeAreaView>

        );
    };
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: 'yellow',
            margin: 20,
        },

    })
;

