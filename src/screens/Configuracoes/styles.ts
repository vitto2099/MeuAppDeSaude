import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  scroll: { padding: 24, flexGrow: 1, justifyContent: 'center' },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 24,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  title: { fontSize: 32, fontWeight: '800', color: '#1E293B', marginBottom: 24, alignSelf: 'flex-start', letterSpacing: -0.5 },
  
  photoContainer: {
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F8FAFC',
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },
  photoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F1F5F9',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changePhotoText: {
    marginTop: 12,
    color: '#0F172A',
    fontWeight: '700',
  },

  formGroup: { width: '100%', marginBottom: 16 },
  label: { fontSize: 16, fontWeight: '700', color: '#334155', marginBottom: 8 },
  input: { backgroundColor: 'rgba(255, 255, 255, 0.95)', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 16, padding: 16, fontSize: 16, color: '#1E293B' },

  saveButton: { backgroundColor: '#0F172A', padding: 18, borderRadius: 16, width: '100%', alignItems: 'center', marginTop: 12, shadowColor: '#0F172A', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 3 },
  saveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  recoverButton: { backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#E2E8F0', padding: 18, borderRadius: 16, width: '100%', alignItems: 'center', marginTop: 16 },
  recoverButtonText: { color: '#1E293B', fontSize: 16, fontWeight: 'bold' },

  backButton: { padding: 16, marginTop: 16, alignItems: 'center' },
  backButtonText: { color: '#64748B', fontSize: 15, fontWeight: 'bold' },

  logoutButton: { backgroundColor: '#FEE2E2', borderWidth: 1, borderColor: '#FECACA', padding: 18, borderRadius: 16, width: '100%', alignItems: 'center', marginTop: 16 },
  logoutButtonText: { color: '#DC2626', fontSize: 16, fontWeight: 'bold' },
});

