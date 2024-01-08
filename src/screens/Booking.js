import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function BookingHistory() {
  return (
    <View style={styles.container}>

<View style={styles.card}>
            <Text style={styles.textBooking}>Booking History</Text>
        </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        
        <View style={styles.bookingCards}>
          {/* Booking Card 1 */}
          <View style={styles.restCard}>
            <Image
              source={require('../../assets/Restu3.png')}
              style={styles.restu1}
            />
            <Text style={styles.restuText}>Ambrosia Hotel & Restaurant</Text>
            <Image
              source={require('../../assets/Frame.png')}
              style={styles.restIcon}
            />
            <Text style={styles.restLocation}>kazi Deiry, Taiger Pass
              {'\n'}
              Chittagong
            </Text>
            <TouchableOpacity style={styles.bookBotton}>
              <Text style={styles.textButton}>Check</Text>
            </TouchableOpacity>
          </View>

          {/* Booking Card 2 */}
          <View style={styles.restCard}>
            <Image
              source={require('../../assets/Restu2.png')}
              style={styles.restu1}
            />
            <Text style={styles.restuText}>Tava Restaurant</Text>
            <Image
              source={require('../../assets/Frame.png')}
              style={styles.restIcon}
            />
            <Text style={styles.restLocation}>Zakir Hossain Rd,
              {'\n'}
              Chittagong
            </Text>
            <TouchableOpacity style={styles.bookBotton}>
              <Text style={styles.textButton}>Check</Text>
            </TouchableOpacity>
          </View>

          {/* Booking Card 3 */}
          <View style={styles.restCard}>
            <Image
              source={require('../../assets/Restu1.png')}
              style={styles.restu1}
            />
            <Text style={styles.restuText}>Haatkhola</Text>
            <Image
              source={require('../../assets/Frame.png')}
              style={styles.restIcon}
            />
            <Text style={styles.restLocation}>6 Surson Road,
              {'\n'}
              Chittagong
            </Text>
            <TouchableOpacity style={styles.bookBotton}>
              <Text style={styles.textButton}>Check</Text>
            </TouchableOpacity>
          </View>
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
      <TouchableOpacity>
      <Image
            source={require('../../assets/add.png')}
            style={styles.addIcon}
          />
      <Text style={styles.addBooking}>More Booking</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  addBooking:{
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20, 
    bottom: 250,
    left: 140,

  },
  addIcon:{
    width: 18,
    color: '#6B7280',
    height: 18,
    bottom: 230,
    left: 115,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingCards: {
    marginVertical: 16,
  },
  card: {
    width: 375,
    height: 67,
    flexShrink: 0,
    borderBottomEndRadius: 17,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#32B768',
    top:40
  },
  textBooking: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 20
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
  restu1: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  restuText: {
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16 * 1.5,
    bottom: 0,
    left: 80,
  },
  restIcon: {
    bottom: -5,
    left: 80,
  },
  bookBotton: {
    width: 88,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#32B768',
    bottom: 10,
    left: 230,
    position: 'absolute',
  },
  textButton: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  restLocation: {
    width: 117,
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 10 * 1.5,
    bottom: 10,
    left: 100,
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
