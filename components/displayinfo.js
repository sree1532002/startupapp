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

const DisplayInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Title>College of Engineering Guindy</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: "https://assets.change.org/photos/0/kf/cv/dnkFcvnbYbdIyuL-800x450-noPad.jpg?1534229683",
            }}
          />
          <Rating
            defaultRating={5}
            size={5}
            style={{ paddingVertical: 10 }}
            imageSize={25}
          />
          <Text style={{ margin: 10 }}>
            The college of Engineering, Guindy (CEG) is a public engineering
            college in Chennai, India and is Asia's oldest technical
            institution,founded in 1974. It is also the oldest technical
            institution to be established outside Europe.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            onPress={() => this.props.navigation.navigate("FullInfo")}
            title="View more"
          />
        </Card>
        <Card>
          <Card.Title>College of Engineering Guindy</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: "https://assets.change.org/photos/0/kf/cv/dnkFcvnbYbdIyuL-800x450-noPad.jpg?1534229683",
            }}
          />
          <Rating
            defaultRating={5}
            size={5}
            style={{ paddingVertical: 10 }}
            imageSize={25}
          />
          <Text style={{ margin: 10 }}>
            The college of Engineering, Guindy (CEG) is a public engineering
            college in Chennai, India and is Asia's oldest technical
            institution,founded in 1974. It is also the oldest technical
            institution to be established outside Europe.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            onPress={() => this.props.navigation.navigate("FullInfo")}
            title="View more"
          />
        </Card>
        <Card>
          <Card.Title>College of Engineering Guindy</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: "https://assets.change.org/photos/0/kf/cv/dnkFcvnbYbdIyuL-800x450-noPad.jpg?1534229683",
            }}
          />
          <Rating
            defaultRating={5}
            size={5}
            style={{ paddingVertical: 10 }}
            imageSize={25}
          />
          <Text style={{ margin: 10 }}>
            The college of Engineering, Guindy (CEG) is a public engineering
            college in Chennai, India and is Asia's oldest technical
            institution,founded in 1974. It is also the oldest technical
            institution to be established outside Europe.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="View more"
          />
        </Card>
        <Card>
          <Card.Title>College of Engineering Guindy</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: "https://assets.change.org/photos/0/kf/cv/dnkFcvnbYbdIyuL-800x450-noPad.jpg?1534229683",
            }}
          />
          <Rating
            defaultRating={5}
            size={5}
            style={{ paddingVertical: 10 }}
            imageSize={25}
          />
          <Text style={{ margin: 10 }}>
            The college of Engineering, Guindy (CEG) is a public engineering
            college in Chennai, India and is Asia's oldest technical
            institution,founded in 1974. It is also the oldest technical
            institution to be established outside Europe.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="View more"
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
export default DisplayInfo;
