import {React} from "react";
import {StyleSheet, Text} from "react-native";
import { Card, Title } from "react-native-paper";
import moment from "moment";

const ItemDetail = ({ item, onPress }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.cardText}>{item.name}</Title>
        <Title style={styles.cardText}>{moment(item.due).format("ddd, MMM Do YYYY")}</Title>
        <Title style={styles.cardText} ><Text onPress={onPress}>{"Done: " + (item.done === false ? "false" : "true")}</Text></Title>
      </Card.Content>
    </Card >
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    height: 150,
    backgroundColor: "yellow"
  },
  cardText: {
    fontSize: 15,
    alignItems: "center",
    textAlign: "center"
  }
});
export default ItemDetail;