import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { DataTable } from "react-native-paper";
import * as Clipboard from "expo-clipboard";

const AppInfo = require("../app.json").expo;
const info = require("../app.json");



const About = ({ navigation }) => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(JSON.stringify(info));
  };

  const viewClipboard = async () => {
    const text = await Clipboard.getStringAsync();
    setText(text);
    setDisplay(!display);
  };


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}> Information about this app</Text>
      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Name</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Slug</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Version</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>AssetBundlePatterns</Text></DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell style={styles.cell}> <Text style={styles.cellText}>{AppInfo.name}</Text></DataTable.Cell>
          <DataTable.Cell style={styles.cell}> <Text style={styles.cellText}>{AppInfo.slug}</Text></DataTable.Cell>
          <DataTable.Cell style={styles.cell}> <Text style={styles.cellText}>{AppInfo.version}</Text></DataTable.Cell>
          <DataTable.Cell style={styles.cell}> <Text style={styles.cellText}>{AppInfo.assetBundlePatterns}</Text></DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <View>
        <Button
          color="blue"
          title="Copy App information to clipboard"
          onPress={copyToClipboard}
        />
        <Button
          color="blue"
          title={(display === false ? "View" : "Hide") + " clipboard information"}
          onPress={viewClipboard}
        />
        <Text style={{ color: "red" }}> {display === true ? text : ""}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}> Navigation</Text>
        <View style={styles.nav}>
          <Button
            color="blue"
            title="Show to-do list"
            onPress={() => navigation.navigate("Todo")}
          />
          <Button
            color="blue"
            title="Show Library Hours"
            onPress={() => navigation.navigate("LibraryHours")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  table: {
    marginTop: 30,
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  cellText: {
    fontSize: 10
  },
  bottom:{
    marginTop:40,
    alignItems:"center"
  },
  nav:{
    flexDirection: "row",
    justifyContent: "space-around",
  }
});
export default About;