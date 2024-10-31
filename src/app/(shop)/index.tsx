import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PRODUCTS } from '../../../assets/products'

const Home = () => {
  return (
    <View>
      <FlatList 
        data={PRODUCTS} 
        renderItem={( item ) => <View></View> }
        keyExtractor={item => item.id.toString()} 
        numColumns={2}
        ListHeaderComponent={<Text>Products</Text>}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})