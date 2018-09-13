import React from 'react';
import { SpellbookScreen } from "./screens/SpellbookScreen";
import { Router, Scene, Stack } from "react-native-router-flux";
import { HomeScreen } from "./screens/HomeScreen";
var App = function (props) {
    return (<Router>
            <Stack key="root">
                <Scene key="home" component={HomeScreen} title="Home Screen"/>
                <Scene key="spellbook" component={SpellbookScreen} title="Spellbook"/>
            </Stack>
        </Router>);
};
export default App;
