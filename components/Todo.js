import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import { DataTable } from "react-native-paper";
import moment from "moment";

const Todo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = () => {
      const  tmpData = require("../data.json").todo;
      setData(tmpData);
    };
    loadData();
  },[]);

  const renderData = () => {
    return data.map((item, index) => {
      return (
        <DataTable.Row key={index}>
          <DataTable.Cell style = {styles.cell}><Text style={styles.cellText}>{item.name}</Text></DataTable.Cell>
          <DataTable.Cell style = {styles.cell}><Text style={styles.cellText}>{moment(item.due).format("ddd, MMM Do YYYY")}</Text></DataTable.Cell>
          <DataTable.Cell style = {styles.cell}><Text style={styles.cellText}>{item.done===false? "false": "true"}</Text></DataTable.Cell>
        </DataTable.Row>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>Load JSON data into a table</Text>
      <Text> 
          Use useEffect to load json data into an array state variable, then map the result array into 
          table rows
      </Text>
      <DataTable style = {styles.table}>
        <DataTable.Header>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Name</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Due</Text></DataTable.Title>
          <DataTable.Title style={styles.cell}><Text style={styles.cellText}>Done</Text></DataTable.Title>
        </DataTable.Header>
        {renderData()}
      </DataTable>
    </View>
  );

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  table: {
    marginTop: 20,
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
});

export default Todo;