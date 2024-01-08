import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Your existing content */}
        <View style={styles.bookingCards}>
          {/* Your existing booking cards */}
        </View>
      </ScrollView>

      {/* Static Tab Bar */}
      <View style={styles.navTab}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Frame1.png')}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookTab}>
          <Image
            source={require('../../assets/Bookmark.png')}
            style={styles.tabBook}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Frame2.png')}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
      </View>


      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  logoutButton: {
    width: 130,
    height: 40,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 28,
    alignItems: 'flex-start',
    borderRadius: 11,
    backgroundColor: '#EB4646',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.19,
    shadowRadius: 6,
    elevation: 3,
    gap: 10,
    bottom: 130,
    marginLeft: 100,
  },
  rateUs: {
    color: '#374151',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    bottom: 20,
    marginLeft: 50,
  },
  textBtn: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    marginLeft: 10,
  },
  rateIcon: {
    width: 20,
    height: 21,
    flexShrink: 0,
    marginLeft: 15,
  },
  textbox: {
    width: 24,
    height: 20,
    flexShrink: 0,
    bottom: 1,
    marginLeft: 15,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingCards: {
    marginVertical: 16,
  },
  err: {
    width: 14,
    height: 14,
    flexShrink: 0,
    marginLeft: 300,
    bottom: 40,
  },
  langIcon: {
    width: 18,
    height: 17,
    flexShrink: 0,
    marginTop: 30,
    marginLeft: 20,
  },
  langText: {
    color: '#374151',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginLeft: 50,
    bottom: 25,
  },
  feedbackText: {
    color: '#374151',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    bottom: 25,
    marginLeft: 50,
  },
  proCard: {
    width: 329,
    height: 196,
    borderRadius: 11,
    backgroundColor: '#FFF',
    elevation: 3,
    bottom: 40,
    marginLeft: 5,
  },
  restCard: {
    width: 340,
    height: 88,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#222222',
    marginVertical: 8,
    top: -100,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  profileIcon: {
    width: 44,
    height: 44,
    borderRadius: 44,
    resizeMode: 'cover',
    marginLeft: 20,
    marginTop: 20,
  },
  profileText: {
    color: '#374151',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    marginLeft: 100,
    bottom: 40,
  },
  note: {
    width: 19,
    height: 19,
    flexShrink: 0,
    bottom: 55,
    marginLeft: 300,
  },
  map: {
    flex: 1,
  },
  navTab: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.09,
    shadowRadius: 14,
    elevation: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabBook: {
    top: 7,
    width: 24,
    height: 24,
  },
  bookTab: {
    position: 'relative',
    bottom: 10,
  },
});
