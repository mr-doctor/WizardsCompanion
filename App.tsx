import React from 'react';
import {Component} from 'react';
import {AppRegistry, Button, Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import {SpellbookScreen} from "./screens/SpellbookScreen";
import {Router, Scene, Stack} from "react-native-router-flux";
import {HomeScreen} from "./screens/HomeScreen";
import {Store} from "react-native-navigation/lib/dist/components/Store";

const App: React.SFC<{ store: Store }> = (props) => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="home" component={HomeScreen} title="Home Screen"/>
                <Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
            </Stack>
        </Router>
    );
};

export default App;