import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import ItemDetail from "./ItemDetail";


const Home = () => {
  const [num, setNum] = useState("0.00");
  const [todoData, setTodoData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const tmpData = require("../data.json").todo;
      setTodoData(tmpData);
    };
    loadData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <ItemDetail
        item={item}
        onPress={() => {
          let tmpData = todoData;
          for (let i = 0; i < tmpData.length; i++) {
            if (tmpData[i].name === item.name) {
              tmpData[i].done = !tmpData[i].done;
            }
          }
          setTodoData(tmpData);
          setCnt(cnt + 1);
        }} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}> Modify a floating pointer number</Text>
      <View style={styles.buttons}>
        <Text>Num is {num} (with 2 decimal places)</Text>
        <Button
          title="Increase num by E"
          onPress={() => setNum((parseFloat(num) + Math.E).toFixed(2))}>
        </Button>
        <Button
          title="Decrease num by PI"
          onPress={() => setNum((parseFloat(num) - Math.PI).toFixed(2))}>
        </Button>
        <Button
          title="Reset num to 0"
          onPress={() => setNum("0.00")}>
        </Button>
      </View>
      <View>
        <View>
          <Button
            color="blue"
            title={(show ? "Hide" : "Show") + " un-done items"}
            onPress={() => {
              setShow(!show);
            }}
          />
        </View>
        <FlatList
          data={todoData.filter(item => item.done !== show)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          extraData={cnt}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttons: {
    justifyContent: "space-around",
    marginTop: 40
  }
});

export default Home;