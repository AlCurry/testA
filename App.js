import React, { Component } from "react";
import { View, StyleSheet, Animated, Platform, Text, TouchableHighlight} from "react-native";

export default class App extends Component {
  constructor() {
    super();

    this.animatedValue = new Animated.Value(0);
  }

  animateBackgroundColor = () => {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 12000
    }).start(() => {
      this.animateBackgroundColor();
    });
  };

  componentDidMount() {
    this.animateBackgroundColor();
  }

  onPress() {
    console.log("Bar pressed Yo");
  }

  render() {
    const backgroundColorVar = this.animatedValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [
        "#E70000", "#FF8C00", "#FFEF00", "#00811F", "#0044FF", "#760089"
      ]
    });
    const backgroundColorVar2 = this.animatedValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [
        "#FF8C00", "#FFEF00", "#00811F", "#0044FF", "#760089", "#E70000"
      ]
    });
    const backgroundColorVar3 = this.animatedValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [
        "#FFEF00", "#00811F", "#0044FF", "#760089", "#E70000", "#FF8C00"
      ]
    });
    const backgroundColorVar4 = this.animatedValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [
        "#00811F", "#0044FF", "#760089", "#E70000", "#FF8C00", "#FFEF00",
      ]
    });
    const backgroundColorVar5 = this.animatedValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [
        "#0044FF", "#760089", "#E70000", "#FF8C00", "#FFEF00", "#00811F"
      ]
    });
    const backgroundColorVar6 = this.animatedValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [
        "#760089", "#E70000", "#FF8C00", "#FFEF00", "#00811F", "#0044FF",
      ]
    });

    const displayData = [
      { id: 1, bg: backgroundColorVar, word: 'A' },
      { id: 2, bg: backgroundColorVar2, word: 'little' },
      { id: 3, bg: backgroundColorVar3, word: 'learning' },
      { id: 4, bg: backgroundColorVar4, word: 'is a' },
      { id: 5, bg: backgroundColorVar5, word: 'dangerous' },
      { id: 6, bg: backgroundColorVar6, word: 'thing' }];

    return (
        <View style={styles.container}>
          {displayData.map((item, key) => (console.log({
                item
              }), <Animated.View key={key} style={[styles.container, { backgroundColor: item.bg }]}>
                  <TouchableHighlight onPress={this.onPress} uderlayColor="black">
                    <View style={styles.view1}>
                      <Text style={styles.text}>{item.word}</Text>
                    </View>
                  </TouchableHighlight>
                </Animated.View>))}
        </View >
        );
   }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: Platform.OS == "ios" ? 20 : 0
  },
  view1: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: Platform.OS == "ios" ? 20 : 0
  },
  text: {
    color: "white",
    fontSize: 32
  }
});
