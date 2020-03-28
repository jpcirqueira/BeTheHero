import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity,Image, Linking } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Mailcomposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();
    const message = 'Olá joao, estou entrando em contato pois gostaria de ajudar no caso "Favela solidaria" com o valor de R$ 160 ';
    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        Mailcomposer.composeAsync({
            subject: "Herói do caso: Favela solidaria",
            recipients: ['jpciqueira81@gmail.com'],
            body: message,
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=55612343432&text=${message}`);
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-right" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>Favela solidaria</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Arrwcadação de alimentos</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>254</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}