import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.bookingCards}>
          <View style={styles.restCard}>
            <Image
              source={require('../../assets/Ellipse.png')}
              style={styles.profileIcon}
            />
            <Text style={styles.profileText}>Sadek Hossen</Text>
            <Text style={styles.profileEmail}>
              sadekbranding@gmail.com
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/bell.png')}
                style={styles.bell}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.restCard}>
            <Image
              source={require('../../assets/pro.png')}
              style={styles.profileIcon}
            />
            <Text style={styles.profileText}>Account setting</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/note.png')}
                style={styles.note}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.proCard}>
            <Image
              source={require('../../assets/language.png')}
              style={styles.langIcon}
            />
            <Text style={styles.langText}>Language</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/errow.png')}
                style={styles.err}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/textbox.png')}
              style={styles.textbox}
            />
            <Text style={styles.feedbackText}>Feedback</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/errow.png')}
                style={styles.err}
              />
            </TouchableOpacity>
            <Image
              source={require('../../assets/rate.png')}
              style={styles.rateIcon}
            />
            <Text style={styles.rateUs}>Rate Us</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/errow.png')}
                style={styles.err}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

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
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.textBtn}>Logout</Text>
      </TouchableOpacity>
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
  profileEmail: {
    bottom: 45,
    marginLeft: 70
  }
});
