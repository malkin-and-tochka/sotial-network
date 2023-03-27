import {Field, Form, Formik} from "formik";
import React from "react";
import style from './profileDataForm.module.css'

const ProfileDataForm = (props) => {
    const submit = (values, {setSubmitting}) => {  // вторым параметром добавляем  setStatus
        props.saveProfile(values)
        setSubmitting(true);
        props.deactivateEditMode()
    };
    return (
        <Formik
            initialValues={props.profile}
            //initialValues={{lookingForAJobDescription:'', lookingForAJob:true, aboutMe:'', fullName:'', contacts:{github:'', vk:'', facebook:'', instagram:'', twitter:'', website:'', youtube:'', mainLink:''}}}
            onSubmit={submit}
        >
            {({isSubmitting}) => <Form className={style.userInfoWrapper}>

                <span>Full name:</span><Field placeholder="Name" name="fullName" type="input"/>
                <span>Looking for a job <Field name="lookingForAJob" type="checkbox"/></span>
                <span>About me:</span>
                <Field placeholder="About me" name="aboutMe" type="input"/>
                <span>My professional skills:</span>
                <Field name="lookingForAJobDescription" type="input"/>
                <span>Your contacts:</span>
                <span>Your github:</span>
                <Field placeholder="Your github" name="contacts.github" type="input"/>
                <span>Your vk:</span>
                <Field placeholder="Your vk" name="contacts.vk" type="input"/>
                <span>Your facebook:</span>
                <Field placeholder="Your facebook" name="contacts.facebook" type="input"/>
                <span>Your instagram:</span>
                <Field placeholder="Your instagram" name="contacts.instagram" type="input"/>
                <span>Your twitter:</span>
                <Field placeholder="Your twitter" name="contacts.twitter" type="input"/>
                <span>Your website:</span>
                <Field placeholder="Your website" name="contacts.website" type="input"/>
                <span>Your youtube:</span>
                <Field placeholder="Your youtube" name="contacts.youtube" type="input"/>
                <span>Your mainLink:</span>
                <Field placeholder="Your mainLink" name="contacts.mainLink" type="input"/>
                <button className={style.profileDataFormButton} type="submit" disabled={isSubmitting}>Save changes</button>
            </Form>}
        </Formik>
    )
}
// github: required(string)
// vk: required(string)
// facebook: required(string)
// instagram: required(string)
// twitter: required(string)
// website: required(string)
// youtube: required(string)
// mainLink

export default ProfileDataForm