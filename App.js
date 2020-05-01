/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { TwoPaneView } from 'react-native-twopaneview';
import FeedScreen from './screens/FeedScreen'
import ContentScreen from './screens/ContentScreen'

const App: () => React$Node = () => {

  const[url, setUrl] = useState('https://devblogs.microsoft.com/surface-duo');

	const getUrlFromItem = (data) => {
	  console.log(data);
	  setUrl(data);
	}

  return (
    <View>
      <TwoPaneView panePriority='pane1' panePriorityVerticalSpanning='pane1' >
        <FeedScreen getUrlCallback={getUrlFromItem} />
        <ContentScreen url={url} />
      </TwoPaneView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
