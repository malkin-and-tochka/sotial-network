import { Form, Formik, Field } from "formik"
import style from './profilePostForm.module.css'
import * as yup from 'yup'
import React from "react"


const ProfilePostForm =(props)=>{
  const addNewPost =(values)=>{
    props.addPost(values.newPost)
    values.newPost=''
  }

  const validationSchema = yup.object().shape({
    newPost: yup.string().typeError('Должно быть сообщение!').required('Пост пустой!')
  })
  
  return(
    <Formik
      initialValues={{newPost:''}}
      onSubmit={addNewPost}
      validationSchema={validationSchema}
      className={style.createPost} >
      {({touched, values, handleSubmit, errors, handleBlur, isValid, dirty, handleChange})=>(
      <Form>
        <Field value={values.newPost} onBlur={handleBlur} onChange={handleChange} className={!(errors.newPost && touched.newPost) ? style.textarea : style.error} name='newPost' type='textarea' placeholder='Write there...'/>
          {errors.newPost && touched.newPost && <p className={style.textError}>{errors.newPost}</p>}
        <div>
          <button disabled={!isValid && !dirty} onClick={handleSubmit} className={style.postButton} type='submit'>
            New Post
          </button>
        </div>
      </Form>
      )}
    </Formik>
  )
}

const ProfilePostFormMemo = React.memo(ProfilePostForm)

export default ProfilePostFormMemo