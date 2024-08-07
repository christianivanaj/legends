import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
  },
  bookItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#3b5998',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  navButton: {
    marginLeft: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#4267B2',
    borderRadius: 5,
  },
  navButtonText: {
    color: 'white',
    fontFamily: 'Roboto_400Regular',
  },
});