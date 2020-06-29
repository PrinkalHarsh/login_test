import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  header: {
    backgroundColor: 'pink',
    height: '30%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  form: {
    flex: 1,
  },
  formText: {
    fontSize: 36,
    fontWeight: '600',
    marginVertical: 15,
    paddingTop: 15,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  formText1: {
    fontSize: 36,
    fontWeight: '600',
    paddingBottom: 7,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  formTextInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 15,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
  },
  footer: {
    backgroundColor: 'white',
    height: '20%',
  },
  btnsignup: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'pink',
    borderRadius: 12,
    marginHorizontal: 35,
    marginTop: 15,
  },
  btnsignupText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
