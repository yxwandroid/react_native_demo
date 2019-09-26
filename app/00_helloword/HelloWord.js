import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
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
            <View style={styles.container}>
                <Text>helo二维微微儿o </Text>
            </View>
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

