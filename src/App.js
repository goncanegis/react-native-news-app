import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";

import news_data from "./news_data.json";
import news_banner_data from "./news_banner_data.json";

import NewsCard from "./components/NewsCard";

function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map((bannerNews) => (
              <Image
                style={styles.banner_image}
                key={bannerNews.id}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
    color: "#444",
  },
  banner_image: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 50,
  },
});

export default App;
