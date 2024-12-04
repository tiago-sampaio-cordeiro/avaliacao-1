// import React from 'react'
// import {View, Text, SectionList, StyleSheet, Image} from 'react-native'
// import Header from "@/src/components/header";
// import dataPassengers from "@/src/services/data-passengers";
// import {groupDataByCountry} from "@/src/helpers/groupData";
//
// export default function Listagem() {
//     const groupedData = groupDataByCountry(dataPassengers);
//     return (
//         <View style={styles.container}>
//             <Header title="Listagem"/>
//             <SectionList
//                 sections={groupedData}
//                 keyExtractor={(item, index) => `${item.id}-${index}`}
//                 renderItem={({item}) => (
//                     <View style={styles.item}>
//                         <Image source={{uri: item.passenger_avatar}} style={styles.avatar}/>
//                         <Text style={styles.name}>
//                             {item.passenger_name} (de {item.origin} para {item.destination})
//                         </Text>
//                     </View>
//                 )}
//                 renderSectionHeader={({section: {title}}) => (
//                     <Text style={styles.header}>{title}</Text>
//                 )}
//             />
//         </View>
//     )
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         padding: 16,
//         backgroundColor: "#fff"
//     },
//     header: {
//         fontSize: 20,
//         fontWeight: "bold",
//         backgroundColor: "white",
//         padding: 20
//     },
//     item: {
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: "white",
//     },
//     avatar: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 10
//     },
//     name: {
//         fontSize: 20,
//     }
//
// })

import React from "react";
import { View, Text, SectionList, StyleSheet, Image } from "react-native";
import Header from "../components/header";
import data from "../services/data-passengers"; // Dados dos passageiros
import { groupDataByCountry } from "../helpers/groupData"; // Função corrigida

export default function Listagem() {
    const groupedData = groupDataByCountry(data);

    return (
        <View style={styles.container}>
            <Header title="Listagem" currentRoute= "Listagem"/>
            <SectionList
                sections={groupedData}
                keyExtractor={(item, index) => `${item.id}-${index}`} // Garante chaves únicas
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.passenger_avatar }} style={styles.avatar} />
                        <Text style={styles.name}>
                            {item.passenger_name}
                        </Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "#e0e0e0",
        padding: 10,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
    },
});

