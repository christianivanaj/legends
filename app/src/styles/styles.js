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
    fontFamily: 'Poppins_700Bold',
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
    fontFamily: 'Poppins_700Bold',
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
    maxWidth: '50%',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    margin: 5,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  navButton: {
    margin: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    height: 40,
  },
  navButtonText: {
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    verticalAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});