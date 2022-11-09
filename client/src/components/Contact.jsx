import React, { useState } from 'react'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = () => {

    const [getdata, setdata] = useState({ name: '', email: '', message: '' })
    const [open, setOpen] = useState(false);
    const [spin, setspin] = useState(false);
    const [getmsg, setmsg] = useState('')

    function handleChange(e) {
        const { name, value } = e.target
        setdata({ ...getdata, [name]: value })
    }

    const Schema = Yup.object().shape({
        name: Yup.string().min(1, 'Too Short!').required('Name is required'),
        email: Yup.string('Enter your EmailId').email('Email must be a valid email address').required('Email is required'),
        message: Yup.string().min(1, 'Too Short!').required('Message is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '', email: '', message: ''
        },

        validationSchema: Schema,

        onSubmit: () => {
        setspin(true)
        setmsg('Thanks for contacting me.')
            setTimeout(() => {
                setspin(false)
                setOpen(true);
                resetForm()
            }, 1000)
            
        }
    });

    const { errors, touched, handleSubmit, getFieldProps, setFieldValue, resetForm } = formik;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <section className="contact section" id="contact">
                <div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={getmsg.type}>
                            {getmsg}
                        </Alert>
                    </Snackbar>

                </div>
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form className="contact__form">
                        <input type="text" name="name" {...getFieldProps("name")} autocomplete="off"  placeholder="Name" className="contact_input c_i" 
                        style={{
                            border: Boolean(touched.name && errors.name) ?
                            '1.5px solid red' : '1.5px solid white'
                        }}
                        />
                        <input type="mail" name="email" {...getFieldProps("email")} autocomplete="off"  placeholder="Email" className="contact_input c_i"
                        style={{
                            border: Boolean(touched.email && errors.email) ?
                            '1.5px solid red' : '1.5px solid white'
                        }}
                        />
                        <textarea placeholder='Message' {...getFieldProps("message")} name="message"  id="" cols="0" rows="6" className="contact_input c_i"
                        style={{
                            border: Boolean(touched.message && errors.message) ?
                            '1.5px solid red' : '1.5px solid white'
                        }}
                        ></textarea>
                        <div className='contact__btn c_i' onClick={handleSubmit}>
                            <span>Submit</span>{spin && <span className='contact_spin'><CircularProgress thickness={7} color='inherit' size={12} /></span>}
                            {!spin && <span className='contact_arrow'><ChevronRightIcon fontSize='small' /></span>}


                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
