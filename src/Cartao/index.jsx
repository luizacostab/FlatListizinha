import React from "react"
import { 
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native"

const styles = StyleSheet.create({
    container: {
      marginBottom: 12,
      flexDirection: "row",
  
      backgroundColor: "#f7ccff",
      borderWidth: 1.2,
      borderStyle: "solid",
      borderRadius: 10,
      borderColor: "black",
    },
  
    info: {
      width: 200,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
  
    description: {
      fontSize: 15,
      color: "black",
      paddingRight: 60,
    },

    title: {
      fontSize: 17,
      fontWeight: "bold",
      color: "black",
    },

    image: {
      height: "100%",
      width: 150,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
});

function Cartao({ officeCourse }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: officeCourse.url }} style={styles.image} />

      <View>
        <View style={styles.info}>
          <Text style={styles.title}>Curso:</Text>
          <Text style={styles.info}>{officeCourse.name}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Descrição:</Text>
          <Text style={styles.description}>{officeCourse.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default Cartao;