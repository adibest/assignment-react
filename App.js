import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Article from './Article.js';

export default class App extends Component {

  render() {

    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>This is header</Text>
          </View>
          <View style={styles.content}>
          <ScrollView>
            <Article 
              title="@el_adib" 
              sentences="elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus"
              image="uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'" 
            />
            <Article 
              title="@fiassan" 
              sentences="vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet" 
            />
            <Article 
              title="@kap" 
              sentences="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Amet justo donec enim diam vulputate ut pharetra sit. Turpis in eu mi bibendum neque egestas congue quisque. Suspendisse ultrices gravida dictum fusce ut. Eget gravida cum sociis natoque. Feugiat nisl pretium fusce id. Malesuada pellentesque elit eget gravida cum sociis natoque. Aliquet enim tortor at auctor urna nunc id cursus. Eget arcu dictum varius duis at consectetur lorem donec. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Dolor morbi non arcu risus quis varius quam quisque id." 
            />
            <Article 
              title="@horotoyo" 
              sentences="elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet" 
            />
            <Article 
              title="@addthoriq" 
              sentences="elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim" 
            />
          </ScrollView>
          </View>
          <View style={styles.footer}>
            <Text>This is footer</Text>
          </View>
        </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#ff0010',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 6,
    backgroundColor: '#fff',
    width: '100%',
  },
  footer: {
    flex: 1,
    backgroundColor: '#aa55ee',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
