import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Details() {
  return (
    <View style={styles.container}>

<View style={styles.card}>
            <Text style={styles.textBooking}>Restaurant Details</Text>
            <TouchableOpacity>
            <Image
              source={require('../../assets/bckErrowa.png')}
              style={{
                width: 24,
                height: 24,
                flexShrink: 0,
                marginLeft: 20,
                marginTop:-20
              }}
            />
            </TouchableOpacity>
        </View>
    
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.topCard}>
        <Text style={styles.topText}> Tava Restaurant</Text>
        <Text style={styles.topLocation}>kazi Deiry, Taiger Pass,Chittagong</Text>
        <Image
              source={require('../../assets/Frame.png')}
              style={styles.myIcon}
            />
            <Image
              source={require('../../assets/mainpic.png')}
              style={styles.myRestu}
            />
            <Text style={styles.myDay}>Open Today</Text>
            <Image
              source={require('../../assets/Clock.png')}
              style={styles.myClock}
            />
            
            <Text style={styles.myTime}>10:00 AM - 12:00 PM</Text>
            <TouchableOpacity style={styles.myDirection}>
            <Image
              source={require('../../assets/Direction.png')}
            
            />
            <Text style={{
              color: '#2C8DFF',
              fontFamily: 'Inter',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '600',
              
            }}>Visit the Restaurant</Text>
            </TouchableOpacity>
            
        
    </View>
    <View style={styles.topBooking}>
      <Text style={styles.toBook}>List other restaurant</Text>
      <Text style={styles.midBook}>check the menu at this restaurant</Text>
      <Text style={styles.toView}>See All</Text>
      <Image
              source={require('../../assets/errow.png')}
              style={styles.errow}
            />
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
        </View>
      </ScrollView>

      {/* Static Tab Bar */}
      <View style={styles.navTab}>
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          paddingVertical: 8,
          paddingHorizontal: 88,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          borderRadius: 10,
          backgroundColor: '#32B768',
          shadowColor: '#0E7F3D',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.24,
          shadowRadius: 5,
          elevation: 5,
        }}>

            <Text style={{
               color: '#FFF',
               textAlign: 'center',
               fontFamily: 'Inter',
               fontSize: 14,
               fontStyle: 'normal',
               fontWeight: '600',
               lineHeight: 14,
            }}>Bookings</Text>
        </TouchableOpacity>
      </View>
      
      
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
  toView: {
    color: '#32B768',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    marginLeft: 270,
    marginTop: -20,
  },
  errow: {
    width: 5,
    height: 10,
    flexShrink: 0,
    strokeWidth: 1.5,
    stroke: '#32B768',
    marginLeft: 310,
    marginTop: -12,
  },
  toBook:{
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 10
  },
  midBook:{
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 19
  },
  topBooking: {
    width: 349,
    height: 377,
    flexShrink: 0,
    borderRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#FFF',
    marginBottom: 20
  },
  topCard: {
    width: 340,
        height: 328,
        flexShrink: 0,
        borderRadius: 16,
        backgroundColor: '#FFF',
        marginBottom: 10,
        marginTop: 50,
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
    marginTop: 90,
    marginLeft: 4,
    top:14,
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
  myRestu: {
    width: 328,
    height: 182,
    marginTop: 10,
    marginLeft: 7,
    flexShrink: 0,
    borderRadius: 8,
    overflow: 'hidden',
  },
  myDay: {
    marginTop: 20,
    marginLeft: 25,
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12,
  },
  myDirection: {
    flexDirection: 'row',
    marginLeft: 180,
    marginTop: -20
  },
  myTime: {
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 12,
    marginLeft: 10,
    marginTop:10,
  },
  myClock: {
    width: 16,
    height: 16,
    flexShrink: 0,
    marginLeft: 7,
    marginTop: -15
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
    marginLeft: 10
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
  myIcon: {
    width: 16,
    height: 16,
    flexShrink: 0,
    marginTop: -15,
    marginLeft: 10

  },
  bookTab: {
    position: 'relative',
    bottom: 10,
  },
  topText: {
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    left: 10,
    marginTop: 10
  },
  topLocation: {
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12,
    width: 210,
    marginLeft: 27
  },
});
