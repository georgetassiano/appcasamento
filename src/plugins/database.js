import * as Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCeL1fy-ujJ2uivh2X3ACQWqyZtNQ-DT6M',
  authDomain: 'planejamentofinanceiro-266ad.firebaseapp.com',
  databaseURL: 'https://planejamentofinanceiro-266ad.firebaseio.com',
  projectId: 'planejamentofinanceiro-266ad',
  storageBucket: '',
  messagingSenderId: '136404868693'
}

const connection = Firebase.initializeApp(config)

const DB = connection.database()

export default DB
