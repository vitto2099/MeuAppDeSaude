import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useEstadoGlobal } from '../../armazenamento/estadoGlobal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { styles } from './styles';

type MoodScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Humor'>;

interface Props {
  navigation: MoodScreenNavigationProp;
}

export default function MoodScreen({ navigation }: Props) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const moods = [
    { id: 'feliz', label: 'Feliz', emoji: '😊' },
    { id: 'triste', label: 'Triste', emoji: '😢' },
    { id: 'nervoso', label: 'Nervoso', emoji: '😠' },
    { id: 'ansioso', label: 'Ansioso', emoji: '😰' },
  ];

  const activities = [
    'Ativo (Pratico Exercícios)',
    'De Vez em Quando',
    'Não Pratico'
  ];

  const addHumor = useEstadoGlobal((state) => state.addHumor);
  const historico = useEstadoGlobal((state) => state.humorHistorico);

  const handleSave = () => {
    if (!selectedMood || !selectedActivity) {
      Alert.alert('Erro', 'Selecione o seu humor e o nível de atividade física.');
      return;
    }
    addHumor({ moodId: selectedMood, activity: selectedActivity });
    Alert.alert('Salvo', 'O seu registro de hoje foi salvo com sucesso!');
    setSelectedMood(null);
    setSelectedActivity(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Como você está?</Text>

        <Text style={styles.sectionTitle}>Seu Humor Hoje</Text>
        <View style={styles.moodGrid}>
          {moods.map((mood) => (
            <TouchableOpacity
              key={mood.id}
              style={[
                styles.moodCard,
                selectedMood === mood.id && styles.selectedCard
              ]}
              onPress={() => setSelectedMood(mood.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.emoji}>{mood.emoji}</Text>
              <Text style={styles.moodLabel}>{mood.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Prática de Exercícios Físicos</Text>
        <View style={styles.activityList}>
          {activities.map((activity) => (
            <TouchableOpacity
              key={activity}
              style={[
                styles.activityButton,
                selectedActivity === activity && styles.selectedActivityButton
              ]}
              onPress={() => setSelectedActivity(activity)}
              activeOpacity={0.7}
            >
              <Text style={[
                styles.activityText,
                selectedActivity === activity && styles.selectedActivityText
              ]}>{activity}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>

        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Histórico Recente</Text>
          {historico.length === 0 ? (
            <Text style={{color: '#666'}}>Nenhum registro ainda.</Text>
          ) : (
            historico.map((h) => {
              const emoji = moods.find(m => m.id === h.moodId)?.emoji || '';
              return (
                <Text key={h.id} style={{color: '#333', marginBottom: 4}}>
                  {new Date(h.data).toLocaleDateString()} - {emoji} | Atividade: {h.activity}
                </Text>
              )
            })
          )}
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
