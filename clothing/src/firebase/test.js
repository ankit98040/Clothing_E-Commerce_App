import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('XqSIaCV3xCxZb1Jnml5r').collection('cartItems').doc('1MEDUmmgnmOOJKgcwuB6');
firestore.doc('/users/XqSIaCV3xCxZb1Jnml5r/cartitems/1MEDUmmgnmOOJKgcwuB6');
firestore.collection('/users/XqSIaCV3xCxZb1Jnml5r/cartitems');