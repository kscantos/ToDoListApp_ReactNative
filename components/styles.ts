import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  mainText: {
    fontSize: 20,
    color: '#191919',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1.5,
    padding: 20,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 25,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  editText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
    color: 'blue',
  },
  listText: {
    fontSize: 20,
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    padding: 5,
    alignItems: 'center',
  },
  deleteText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
  taskLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginLeft: 140,
  },
  detailText: {
    fontSize: 18,
  },
  searchcontainer: {
    marginLeft: 40,
    padding: 5,
    height: 55,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchinput: {
    borderWidth: 1.5,
    borderRadius: 8,
    width: '155%',
    marginTop: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  pageInfo: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    justifyContent: 'center',
  },
  subTaskText: {
    color: 'gray',
    marginLeft: 10,
  },
});

export default styles;
