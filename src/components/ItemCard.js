import React from 'react';
import {
  Button,
  StyleSheet,
  Image,
  Text,
  View,

} from 'react-native'

export default function ItemCard(props) {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={{ uri: props.image }}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>
          {props.name}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.cardBottom}>
          <Text style={styles.cardTag} numberOfLines={1}>
            Tecnología
          </Text>
          <Button
            style={styles.cardButton}
            title={'Lo quiero'} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    height: 400,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  cardImage: {
    flex: 7,
  },
  cardInfo: {
    flex: 3,
    margin: 10,
    justifyContent: 'space-around'
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardDescription: {
    height: 55,
    fontSize: 13,
    fontWeight: '300',
  },
  cardBottom: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardTag: {
    maxWidth: 110,
    fontSize: 15,
    backgroundColor: '#c8d6e0',
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 2,
  },
  cardButton: {

  }
});