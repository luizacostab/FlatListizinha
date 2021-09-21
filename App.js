import React from "react"
import { 
  StyleSheet, 
  Text, 
  FlatList, 
  View, 
} from "react-native"

import Cartao from "./src/Cartao"

const data = [{
    id: "0",
    name: "Word",
    description: "Aprenda Word do básico ao avançado",
    url: "https://img.ibxk.com.br/2021/04/29/29133329982198.jpg",
  },
  {
    id: "1",
    name: "Excel",
    description: "Curso que abranje todos os tópicos do Excel",
    url: "https://catracalivre.com.br/wp-content/uploads/2016/12/excel.png",
  },
  {
    id: "2",
    name: "PowerPoint",
    description: "Faça apresentações no PowerPoint como um mestre",
    url: "https://www.ro.senac.br/wp-content/uploads/2020/10/powerpoint.jpg",
  },
  {
    id: "3",
    name: "Word",
    description: "Aprenda Word do básico ao avançado",
    url: "https://img.ibxk.com.br/2021/04/29/29133329982198.jpg",
  },
  {
    id: "4",
    name: "Excel",
    description: "Curso que abranje todos os tópicos do Excel",
    url: "https://catracalivre.com.br/wp-content/uploads/2016/12/excel.png",
  },
  {
    id: "5",
    name: "PowerPoint",
    description: "Faça apresentações no PowerPoint como um mestre",
    url: "https://www.ro.senac.br/wp-content/uploads/2020/10/powerpoint.jpg",
  }]

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👇 Cursinhos 👇</Text>

      <FlatList
        data={data}
        style={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Cartao officeCourse={item} />}
      />

      <Text style={styles.footer}>Feito por: Luiza Costa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
    backgroundColor: "#ccfffb"
  },

  title: {
    marginVertical: 24,
    alignSelf: "center",

    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },

  list: {
    paddingBottom: 16,
  },

  footer: {
    marginTop: 14,
    marginBottom: 14,
    alignSelf: "center",

    fontSize: 14,
    color: "#474747",
  }
});