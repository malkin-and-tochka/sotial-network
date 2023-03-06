import { Form, Formik, Field } from "formik"
import style from './messagesForm.module.css'
import * as yup from 'yup' 


const MessagesForm =(props)=>{

  
  const addMessage = (values) => {
    debugger
    props.addMessage(values.newMessageBody)
  }

  // const submit =(values, { setSubmittimg })=>{
  //   alert(JSON.stringify(values))
  // }

  const validationSchema = yup.object().shape({
    newMessageBody: yup.string().typeError('vnldksvdnv').required('сообщение пусто')
  })

  return(
    <Formik
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={addMessage}
      initialValues={{ newMessageBody: ''}}>

      {({ values, isSubmitting, touched, handleBlur, handleSubmit, handleChange, errors, dirty, isValid})=>(

        <Form className={style.bot}>
        {errors.newMessageBody && touched.newMessageBody && <p>{errors.newMessageBody}</p>}
          <Field value={values.newMessageBody} onBlur={handleBlur} onChange={handleChange} className={style.bottomInput} type="textarea" name="newMessageBody" placeholder="Write..."/>
          {errors.newMessageBody && touched.newMessageBody && <p>{errors.newMessageBody}</p>}
          <div className={style.father}>
            <button
              onClick={handleSubmit}
              disabled={!isValid && !dirty} className={style.messageButton} type="submit">
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default MessagesForm