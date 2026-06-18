import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useEstadoGlobal } from '../../armazenamento/estadoGlobal';
import { styles } from './styles';

type EducacaoFisicaNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EducacaoFisica'>;

interface Props {
  navigation: EducacaoFisicaNavigationProp;
}

export default function TelaEducacaoFisica({ navigation }: Props) {
  const [desc, setDesc] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { perfil, updatePerfil } = useEstadoGlobal();
  const frequenciaAtividade = perfil?.frequenciaAtividade || null;
  const treinos = useEstadoGlobal((state) => state.treinos);
  const addTreino = useEstadoGlobal((state) => state.addTreino);

  const activities = [
    'Ativo (Pratico Exercícios)',
    'De Vez em Quando',
    'Não Pratico'
  ];

  const biblioteca = [
    { nome: 'Caminhada Rápida', desc: 'Caminhe em um ritmo acelerado por 30 minutos. Ótimo para a saúde do coração e perda de calorias.' },
    { nome: 'Alongamento Matinal', desc: 'Estique os braços, pernas e costas logo após acordar. Melhora a flexibilidade e postura diária.' },
    { nome: 'Agachamento Simples', desc: 'Faça 3 séries de 12 repetições. Mantenha as costas retas e o peso nos calcanhares.' },
    { nome: 'Flexão de Braços', desc: 'Apoie os joelhos no chão se for iniciante. Tente fazer 3 séries do máximo que conseguir.' },
  ];

  const handleRegistrar = () => {
    if (!desc) {
      Alert.alert('Erro', 'Por favor, descreva o treino que você realizou.');
      return;
    }
    addTreino({ descricao: desc });
    Alert.alert('Sucesso', 'Treino registrado! Continue assim!');
    setDesc('');
  };

  const treinosNaSemana = treinos.length % 6; // Lógica mock para exibir na progress bar

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Educação Física</Text>
        <Text style={styles.subtitle}>Acompanhe seus treinos e gasto calórico.</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Prática de Exercícios Físicos</Text>
          <View style={styles.activityList}>
            {activities.map((activity) => (
              <TouchableOpacity
                key={activity}
                style={[
                  styles.activityButton,
                  frequenciaAtividade === activity && styles.selectedActivityButton
                ]}
                onPress={() => updatePerfil({ frequenciaAtividade: activity })}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.activityText,
                  frequenciaAtividade === activity && styles.selectedActivityText
                ]}>{activity}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>


        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Meta Semanal</Text>
          <Text style={styles.infoText}>{treinosNaSemana} de 5 treinos realizados</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(treinosNaSemana / 5) * 100}%` }]} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Registrar Treino</Text>
          <TextInput placeholderTextColor="#999" 
            style={styles.input} 
            placeholder="Ex: Caminhada 30 min" 
            value={desc} 
            onChangeText={setDesc} 
          />
          <TouchableOpacity style={styles.actionButton} onPress={handleRegistrar}>
            <Text style={styles.actionButtonText}>+ Salvar Treino</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Últimos Treinos</Text>
          {treinos.length === 0 ? (
            <Text style={{color: '#666'}}>Você ainda não registrou treinos.</Text>
          ) : (
            treinos.map((t) => (
              <Text key={t.id} style={{color: '#333', marginBottom: 4}}>
                {new Date(t.data).toLocaleDateString()}: {t.descricao}
              </Text>
            ))
          )}
        </View>

        <TouchableOpacity style={styles.actionButtonSecondary} onPress={() => setModalVisible(true)}>
          <Text style={styles.actionButtonTextSecondary}>Biblioteca de Exercícios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Biblioteca de Exercícios</Text>
            <ScrollView>
              {biblioteca.map((item, index) => (
                <View key={index} style={styles.exerciseItem}>
                  <Text style={styles.exerciseName}>{item.nome}</Text>
                  <Text style={styles.exerciseDesc}>{item.desc}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.closeModalBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModalText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
