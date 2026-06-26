import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  scroll: { padding: 24, flexGrow: 1 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#ffc107', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  card: { backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: 20, borderRadius: 12, elevation: 2, marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  infoText: { fontSize: 16, color: '#666', marginBottom: 16 },
  input: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 18, marginBottom: 12 },
  actionButton: { backgroundColor: '#ffc107', padding: 16, borderRadius: 12, alignItems: 'center' },
  actionButtonText: { color: '#333', fontSize: 16, fontWeight: 'bold' },
  secondaryButton: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ffc107', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 10 },
  secondaryButtonText: { color: '#333', fontSize: 16, fontWeight: 'bold' },
  backButton: { backgroundColor: '#dc3545', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 'auto' },
  backButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  historyContainer: { padding: 16, backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: 12, borderWidth: 1, borderColor: '#eee', marginBottom: 20 },
  historyTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 }
});

