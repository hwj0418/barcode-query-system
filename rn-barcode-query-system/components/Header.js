import React from 'react';
import { View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

// Import constants
import Colors from '../constants/colors';
import Texts from '../constants/texts-en.js';

// Import media file
import AcctNotLoginImg from '../media/login_icon.png';

const Header = (props) => {

  // Handler for Home on naviagtion bar clicked
  const clickHomeHandler = () => {
    props.onHomeClicked();
  };

  return (
    <View style={styles.header}>

      {/* Navigation bar */}
      <View style={styles.navBarContainer}>

        {/* Home on navigation bar */}
        <TouchableOpacity onPress={clickHomeHandler}>
          <Text style={styles.navBarItem}>{Texts.navBarItemHome}</Text>
        </TouchableOpacity>

      </View>

      {/* Title on header */}
      <Text style={styles.headerTitle}>{props.title}</Text>

      {/* Login section on header */}
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

// Styling information
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 30,
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
    fontSize: 15,
    marginHorizontal: 10
  }
});

export default Header;
