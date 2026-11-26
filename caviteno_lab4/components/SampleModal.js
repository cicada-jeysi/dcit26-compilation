import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const SampleModal = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Image
              source={require('../assets/Firefox_logo,_2019.svg.webp')}
              style={styles.image}
            />
            <Text style={styles.modalText}>
              The Firefox logo is the logo of the Firefox web browser made by Mozilla. It depicts a stylized orange fox named Kit partially surrounding and overlooking a globe.

The first version of the logo debuted in Firefox 0.8, released in 2004.[1] Prior to this, the browser was called Phoenix, and then Mozilla Firebird, and used a phoenix as its logo. This logo saw minor redesigns in 2009, 2013, and 2017, transitioning to a more flat and textureless version.

In October 2019, Mozilla redesigned the logo for the Firefox browser. The redesign also introduced a unifying logo (consisting of an orange swirl) to represent the browser and other products within the Firefox brand, which was widely mistaken for a new logo for the browser itself.

Different versions of the browser, Firefox Nightly (the nightly beta version of Firefox) and Firefox Focus (a privacy-focused mobile browser), currently use recolored variations of the logo. (Wikipedia)
            </Text>
          </ScrollView>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FCE6B6',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalText: {
    marginVertical: 15,
    textAlign: 'center',
    fontFamily: 'courier',
    color: '#4208C9',
  },
  closeButton: {
    backgroundColor: '#9C2807',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SampleModal;
