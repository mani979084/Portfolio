import React, { useState } from 'react'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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


    function handleSubmit() {

        setspin(true)
        async function fetch() {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(getdata)
            const res = await axios.post('/api/contact', body, config);
            setmsg(res.data)
            setTimeout(() => {
                setspin(false)
                setOpen(true);
                setdata({ name: '', email: '', message: '' })
            }, 1000)
        }
        fetch()
    }

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
                            {getmsg.msg}
                        </Alert>
                    </Snackbar>

                </div>
                <h2 className="section-title">Contact</h2>

                <div className="contact__container bd-grid">
                    <form className="contact__form">
                        <input type="text" name="name" autocomplete="off" value={getdata.name} onChange={handleChange} placeholder="Name" className="contact_input c_i" />
                        <input type="mail" name="email" autocomplete="off" value={getdata.email} onChange={handleChange} placeholder="Email" className="contact_input c_i" />
                        <textarea placeholder='Message' onChange={handleChange} name="message" value={getdata.message} id="" cols="0" rows="6" className="contact_input c_i"></textarea>
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
