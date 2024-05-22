import { StyleSheet, Text, View, F, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

list = [
  {
    id: 1,
    label: 'Conta de Luz',
    value: '300,50',
    date: '01/01/2024',
    type: 0 //despesa
  },
  {
    id: 2,
    label: 'Conta de Internet',
    value: '100,50',
    date: '15/01/2024',
    type: 0 //despesa
  },
  {
    id: 3,
    label: 'Salário CLT',
    value: '15000,50',
    date: '30/01/2024',
    type: 1 //receita
  },
  {
    id: 4,
    label: 'Mesada',
    value: '500',
    date: '22/01/2024',
    type: 1 //receita
  },
  {
    id: 5,
    label: 'Conta de Água',
    value: '500,50',
    date: '27/01/2024',
    type: 0 //despesa
  },
  {
    id: 6,
    label: 'Aluguel',
    value: '1000',
    date: '11/01/2024',
    type: 0 //despesa
  },
  {
    id: 7,
    label: 'Conta de Internet',
    value: '100,50',
    date: '15/01/2024',
    type: 0 //despesa
  },
  {
    id: 8,
    label: 'Compras',
    value: '850,41',
    date: '19/01/2024',
    type: 0 //despesa
  },
  {
    id: 9,
    label: 'Bico fds',
    value: '1000',
    date: '22/01/2024',
    type: 1 //despesa
  },
  {
    id: 10,
    label: 'Dividendos',
    value: '2000',
    date: '30/01/2024',
    type: 1 //despesa
  }
]

export default function Home() {
  return (
    <TouchableOpacity style={styles.container}>
      <Header name={'Harison Rios'} />
      <Balance />
      <Actions/>
      <Text style={styles.title}> Ultimas Movimentações </Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    margin: 14,
  },
  list: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 5,
  }
});
