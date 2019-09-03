import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Import constants
import Colors from '../constants/colors';
import Texts from '../constants/texts-en.js';

// Import media file
import AcctNotLoginImg from '../media/login_icon.png';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.navBarContainer}>
        <Text style={styles.navBarItem}>{Texts.navBarItemHome}</Text>
      </View>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <View style={styles.loginSectionContainer}>
        <Image
          style={styles.acctIcon}
          source={AcctNotLoginImg}
        />
        <Text style={styles.acctText}>{Texts.login}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18
  },
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 5,
    marginHorizontal: 10
  },
  navBarItem: {
    fontSize: 18
  },
  loginSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2
  },
  acctIcon: {
    width: 35,
    height: 35
  },
  acctText: {
    fontSize: 18,
    marginHorizontal: 10
  }
});

export default Header;
