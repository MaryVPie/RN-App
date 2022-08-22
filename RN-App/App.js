import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  View,
  Alert,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const data = [
  {
    id: "1",
    text: "Italian",
    languageCode: "it",
  },
  {
    id: "2",
    text: "Russian",
    languageCode: "ru",
  },
  {
    id: "3",
    text: "Spanish",
    languageCode: "es",
  },
  {
    id: "4",
    text: "French",
    languageCode: "fr",
  },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const pressMe = () => {
    setModalVisible(true);
  };
  const callMe = (item) => {
    // TODO: save to local storage
    console.log(item);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Choose a language</Text>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Pressable
                    style={[styles.button]}
                    onPress={() => callMe(item)}
                  >
                    <img
                      src={`https://flagcdn.com/16x12/${item.languageCode}.png`}
                      srcSet={`https://flagcdn.com/32x24/${item.languageCode}.png 2x,
    https://flagcdn.com/48x36/${item.languageCode}.png 3x`}
                      width="16"
                      height="12"
                      alt={item.text}
                    ></img>
                    <Text style={styles.modalText}>{item.text}</Text>
                  </Pressable>
                  //
                )}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text>Hello !</Text>
        <StatusBar style="auto" />
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={pressMe}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
