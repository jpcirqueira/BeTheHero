import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> = 0 casos </Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
            data={[1,2,3]} 
            style={styles.incidentsList} 
            keyExtractor={incident => String(incident)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
                <View style={styles.incident}>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>Favela solidaria</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Arrwcadação de alimentos</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>254</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={17} color="#E02041" />
                </TouchableOpacity>
                </View>
            )} />
        </View>
    );
};
