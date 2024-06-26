import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function Balance() {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}> Saldo </Text>

                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$ </Text>
                    <Text style={styles.balance}>15.000,50 </Text>
                </View>
            </View>



            <View style={styles.item}>
                <Text style={styles.itemTitle}> Despesas </Text>

                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>- R$ </Text>
                    <Text style={styles.expanse}>9.250,50 </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },

   content: {
    flexDirection: 'row',
    alignItems: 'center',
   },

   currencySymbol:{
    color: '#ccc',
    marginRight: '3',
   },

   balance: {
     fontSize: 25,
     color: '#2ecc71'
   },
   expanse: {
    fontSize: 25,
    color: 'red'
  },
})