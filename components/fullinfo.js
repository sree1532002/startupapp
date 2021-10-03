import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Rating } from "react-native-ratings";

const FullInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Divider />
          <Card.Image
            style={{ height: 300 }}
            source={{
              uri: "https://assets.change.org/photos/0/kf/cv/dnkFcvnbYbdIyuL-800x450-noPad.jpg?1534229683",
            }}
          />
          <Card.Title style={{ marginTop: 10 }}>
            College of Engineering Guindy
          </Card.Title>
          <Card.Title>Chennai, India</Card.Title>
          <Card.Title>Ranking</Card.Title>
          <Rating
            defaultRating={5}
            size={5}
            style={{ paddingVertical: 10 }}
            imageSize={25}
          />
          <Card.Title>Rating</Card.Title>
          <Rating
            defaultRating={5}
            size={5}
            style={{ paddingVertical: 10 }}
            imageSize={25}
          />
          <Card.Title>About</Card.Title>
          <Text style={{ margin: 10 }}>
            The college of Engineering, Guindy (CEG) is a public engineering
            college in Chennai, India and is Asia's oldest technical
            institution,founded in 1974. It is also the oldest technical
            institution to be established outside Europe.
          </Text>
          <Card.Title>Courses offered</Card.Title>
          <Text style={{ margin: 10 }}>B.E/B.Tech</Text>
          <Text style={{ margin: 10 }}>M.E/M.tech</Text>
          <Text style={{ margin: 10 }}>M.Sc</Text>
          <Text style={{ margin: 10 }}>Ph.D</Text>
          <Text style={{ margin: 10 }}>MBA</Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Apply now"
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    //backgroundColor: "pink",
    //marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
export default FullInfo;
