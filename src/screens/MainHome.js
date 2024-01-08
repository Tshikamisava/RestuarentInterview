import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function MainHome() {
  const cardImages = [
    require('../../assets/image1.png'),
    require('../../assets/image2.png'),
    require('../../assets/image3.png'),
  ];

  const navigation = useNavigation();
  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Frame.png')}
          style={styles.locationIcon}
        />
        <Text style={styles.homeText}>Agrabad 435, Chittagong</Text>
        <Image
          source={require('../../assets/Ellipse.png')}
          style={styles.profileIcon}
        />
        <Image
          source={require('../../assets/Group.png')}
          style={styles.groupIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
        />

        <Text style={styles.textMain}>
          Today New Arrivals
        </Text>

        <Text style={styles.textMain1}>Best of the today food list update</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsScrollView}
        >
          {cardImages.map((image, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={image}
                style={styles.img}
                onError={(error) => console.error('Image error:', error)}
              />
              <Text style={styles.menuText}>Chicken Biryani {index + 1}</Text>
              <Text style={styles.locationText}>Ambrosia Hotel & Restaurant</Text>
              <Image
                source={require('../../assets/Frame.png')}
                style={styles.locationCard}
              />
            </View>
          ))}
        </ScrollView>
        <Text style={styles.textExplore}>Explore Restaurant</Text>
        <Text style={styles.textExpmin}>Check your city Near by Restaurant</Text>
      </View>
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
                    Chittagong</Text>
        <TouchableOpacity style={styles.bookBotton}>
          <Text style={styles.textButton}>Book</Text>
        </TouchableOpacity>
      </View>
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
                    Chittagong</Text>
        <TouchableOpacity style={styles.bookBotton}>
          <Text style={styles.textButton}>Book</Text>
        </TouchableOpacity>
      </View>
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
                    Chittagong</Text>
        <TouchableOpacity style={styles.bookBotton}>
          <Text style={styles.textButton}>Book</Text>
        </TouchableOpacity>
      </View>
    
    </ScrollView>
      <View style={styles.navTab}>
            <TouchableOpacity>
            <Image
          source={require('../../assets/Frame1.png')}
          style={{bottom: -15,
          left: 40}}
        />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookTab}  onPress={() => navigation.navigate('BookingHistory')}>
            <Image
          source={require('../../assets/Bookmark.png')}
          style={{left: 155,
          top: -20}}
        />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PCrofile')}>
            <Image
          source={require('../../assets/Frame2.png')}
          style={{bottom:55,
          left: 280}}
        />
            </TouchableOpacity>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812,
    background: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restIcon: {
    bottom: 40,
    left: 80
  },
  bookBotton: {
    width: 88,
    height: 28,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#32B768',
    bottom: 90,
    left: 230,
  },
  textButton:{
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 12,
    textAlign: 'center',
    marginTop: 10
  },
  locationIcon: {
    width: 16,
    height: 16,
    flexShrink: 0,
    top: 50,
    right: 80,
  },
  restuText: {
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16 * 1.5,
    bottom:55,
    left: 80
  },
  restu1: {
    top: 10,
    left: 10,
    
  },
  navTab: {
    width: 375,
    height: 64,
    flexShrink: 0,
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
    elevation: 1
  },
  restLocation: {
    width: 117,
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 10 * 1.5,
    bottom: 65,
    left: 100
  },
  locationCard: {
    width: 10,
    height: 10,
    flexShrink: 0,
    bottom: 10,
    left: 15,
    margin: 7,
  },
  homeText: {
    color: '#4B5563',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
    top: 27,
    left: 7,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 32,
    flexShrink: 0,
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    bottom: 7,
    left: 130,
  },
  groupIcon: {
    width: 16,
    height: 16,
    flexShrink: 0,
    bottom: 27,
    right: 140,
  },
  input: {
    width: 280,
    height: 36,
    borderRadius: 11,
    backgroundColor: '#E6E7E9',
    flexShrink: 0,
    bottom: 10,
    right: 0,
  },
  textMain: {
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 16 * 1.5,
    bottom: 0,
    right: 77,
  },
  textExplore: {
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16 * 1.5,
    bottom: 370,
    right: 90 // You may need to adjust the line height based on your design
  },
  textExpmin: {
    width: 217,
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12 * 1.5, 
    bottom: 370,
    right:66,
  },
  
  
  textMain1: {
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 12 * 1.5,
    width: 217,
    bottom: 0,
    right: 50,
  },
  cardsScrollView: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  card: {
    width: 148,
    height: 196,
    flexShrink: 0,
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    marginHorizontal: 8,
  },
  img: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  restCard: {
      width: 340,
      height: 88,
      flexShrink: 0,
      borderRadius: 10,
      backgroundColor: '#FFF',
      shadowColor: '#222222',
      bottom: 340,
      margin: 7,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.06,
      shadowRadius: 4,
      elevation: 1, // Android shadow
    
     // You may need to adjust the line height based on your design
  },
  
  menuText: {
    color: '#1F2937',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 16 * 1.5,
    marginTop: 8,
    marginLeft: 8,
  },
  locationText: {
    color: '#6B7280',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 10 * 1.5,
    marginLeft: 8,
  },
});
