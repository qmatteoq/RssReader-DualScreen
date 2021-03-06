import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const ContentScreen: () => React$Node = (props) => {
  return (
      <View style={{ flex: 1 }}>
        <WebView
          source={ { uri: props.url } }
          style={ { width: 505}}
        />
      </View>
    );
}

export default ContentScreen;