import { useState, useEffect} from 'react'; 
import {db, auth} from './firebaseConnection';

import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';

import{
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

function App(){
  const [titulo,setTitulo] = useState("");
  const [autor,setAutor] = useState("");
  const [idPost,setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const[post, setPosts] = useState([]);

  const[user, setUser] = useState(false);
  const[userDetail, setUserDetail] = useState([]);

  useEffect(()=> {
    async function carregarPosts(){
      const dados = onSnapshot(collection(db,"posts"),(snapshot)=>{
        let listaPost = [];
        snapshot.forEach((doc)=> {
          listaPost.push({
            idPost: doc.id,
            titulo: doc.data().titulo, 
            autor: doc.data().autor //por ser string utilizar .data()
          });
        });
        setPosts(listaPost);
      })
    }
    carregarPosts();
  }, []);

  useEffect(()=>{
    async function verificarlogin(){
    onAuthStateChanged(auth, (user) =>{
      if(user){
        //usuário logado
        setUser(true)
        setUserDetail({
          id: user.id,
          email: user.email
        });
      } else{
        setUser(false);
        setUserDetail({});
      }
    })                                                                                                    
    }
    verificarlogin();
  }, []);
  //adicionar o post (create)
  async function criarPost(){
    await addDoc(collection(db , "posts"), {
      titulo: titulo,
      autor: autor,
    }).then(()=>{
      setAutor('')
      setTitulo('')
    }).catch((error)=>{
      console.log("Erro" + error)
    })
  }
  //buscar os posts(read)

  async function buscarPosts(){
    const listasPost = collection(db, "posts");
    await getDocs(listasPosts).then((snapshot)=>{
      let lista =[];
      console.log(snapshot)
      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        });
      });
      setPosts(lista);
    }).catch((error)=>{
      console.log("DEU RUIM! "+ error)
    })
  }
  }
