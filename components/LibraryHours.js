import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import axios from "axios";
import moment from "moment";

const LibraryHours = () => {
  const [data, setData] = useState([]);



  useEffect(() => {
    const getData = async () => {
      try {

        const res = await axios({
          method: "get",
          url: "http://brandaserver.herokuapp.com/getinfo/libraryHours/week",
          mode: 'no-cors',
        });

        // let res = await fetch("http://brandaserver.herokuapp.com/getinfo/libraryHours/week", {mode:"no-cors"});

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const getStatus = (obj) => {
    if (obj.status === "open") {
      return obj.hours[0].from +" - " + obj.hours[0].to;
    } else {
      return "Closed";
    }
  }

  const renderData = (i) => {
    return data.map((item, index) => {
      return (
        <DataTable.Row key={index}>
          <DataTable.Cell ><Text >{item.day}</Text></DataTable.Cell>
          <DataTable.Cell ><Text >{moment(item.date).format("MMM Do YYYY")}</Text></DataTable.Cell>
          <DataTable.Cell ><Text >{getStatus(item.hours[i].times)}</Text></DataTable.Cell>
        </DataTable.Row>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Main Library Hours</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Day</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Hours</DataTable.Title>
        </DataTable.Header>
        {renderData(0)}
      </DataTable>
      <Text style={styles.heading}>Research Help Desk Hours</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Day</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Hours</DataTable.Title>
        </DataTable.Header>
        {renderData(1)}
      </DataTable>
      <Text style={styles.heading}>Research Help Online Chat Hours</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Day</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Hours</DataTable.Title>
        </DataTable.Header>
        {renderData(2)}
      </DataTable>
      <Text style={styles.heading}>Archives and Special Collections Hours</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Day</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Hours</DataTable.Title>
        </DataTable.Header>
        {renderData(3)}
      </DataTable>
      <Text style={styles.heading}>Sound and Image Media Studios Hours</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Day</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Hours</DataTable.Title>
        </DataTable.Header>
        {renderData(4)}
      </DataTable>
      <Text style={styles.heading}>MakerLab, Automation Lab & Digital Scholarship Lab Hours</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Day</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Hours</DataTable.Title>
        </DataTable.Header>
        {renderData(5)}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop:5
  },
});
export default LibraryHours;