import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';
 
var listaProdutos=[
  {"nome":"Iphone", "preco":7999.99,"descricao":"Celular Maçã"},
  {"nome":"S30", "preco":3999.99,"descricao":"Celular Maçã"},
  {"nome":"LG", "preco":999.99,"descricao":"Celular Maçã"},
  {"nome":"Motorola", "preco":1999.99,"descricao":"Celular Maçã"},
  {"nome":"Xiaomi", "preco":2999.99,"descricao":"Celular Maçã"},
]
 
export default function App() {
  return (
    <View style={styles.container}>
      <List.Section>
      <List.Subheader>Produtos</List.Subheader>
        {listaProdutos.map((produto)=>{
          return (
            <List.Item title={produto.nome} left={() => <List.Icon icon="cellphone" />} right={() => <Text>{produto.preco}</Text>} />
          )
        })}
       
      </List.Section>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
 