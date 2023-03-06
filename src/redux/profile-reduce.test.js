import profileReducer, {addPost, deletePost} from "./profile-reduce";

//start state
let state = {
    postsData : [
        {id:1, post:'hi', name:'Sasha'},
        {id:2, post:'how are you', name:'Lena'},
        {id:3, post:'im fine', name:'Ignat'},
        {id:4, post:'4 post', name:'Dima'},
        {id:5, post:'5 post', name:'Kostya'},
    ],
}

it('length should be incremented', ()=>{
    let action = addPost('test post')
    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.postsData.length).toBe(6)
})
it('post should be correct', ()=>{
    let action = addPost('test post')
    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.postsData[5].post).toBe('test post')
})
it('post should be delete', ()=>{
    let action = deletePost(1)
    //action
    let newState = profileReducer(state, action)

    //expectation
    expect(newState.postsData.length).toBe(4)
})