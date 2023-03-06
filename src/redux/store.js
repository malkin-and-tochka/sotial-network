import dialogsReducer from './dialogs-reduce'
import profileReducer from './profile-reduce'

let store = {
  _state : {

    dialogsDatawrapper:{
      dialogsData : [
        {id:1 , name:'Sasha'},
        {id:2 , name:'Lena'},
        {id:3 , name:'Ignat'},
        {id:4 , name:'Dima'},
        {id:5 , name:'Kostya'}
      ],
      messagesData : [
        {id:1 , message:'hi, my name is '},
        {id:2 , message:'Lena'},
        {id:3 , message:'Ignat'},
        {id:4 , message:'Dima'},
        {id:5 , message:'Kostya'},
        {id:6 , message:'its work!!!'}
      ],
      newMessage : 'your message'
    },
    ProfileDataWrapper:{
      postsData : [
        {id:1, post:'hi', name:'Sasha'},
        {id:2, post:'how are you', name:'Lena'},
        {id:3, post:'im fine', name:'Ignat'},
        {id:4, post:'4 post', name:'Dima'},
        {id:5, post:'5 post', name:'Kostya'},
      ],
      newPostText : 'test'
    }
  },
  getState(){
    return this._state
  },
  _callSubscriber(){
    //заглушка
  },
  dispatch(action){
    this._state.dialogsDatawrapper = dialogsReducer(this._state.dialogsDatawrapper, action)
    this._state.ProfileDataWrapper = profileReducer(this._state.ProfileDataWrapper,action)
    this._callSubscriber(this._state)
  },
  subscribe(observer){
    this._callSubscriber = observer
    //присваеваем rerenderTree значение функции, которая определена в index
    //до этого rerenderTree была пустой
  }
  
}

export const addPostAcctionCreator = () =>{
  return{
    type:'Add-Post'
  }
}

export const onPostChangeAcctionCreator = (text) =>{
  return{
    type:'Update-New-Post-Text',
    newText: text
  }
}

export const addMessageAcctionCreator = () =>{
  return{
    type:'Add-Message'
  }
}

export const onMessageChangeAcctionCreator = (text) =>{
  return{
    type:'Update-New-Message-Text',
    newText: text
  }
}

export default store