import React, { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        setFormData({
            name: '',
            email: '',
            message: '',
        });

        setFormSubmitted(true);
    };

    return (
        <section className="py-5 text-center container">
            <div>
                <h1>Contact</h1>
                <br />

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                id="name"
                                type="text"
                                className="form-control mb-4 bg-light"
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input
                                id="email"
                                type="email"
                                className="form-control mb-4 bg-light"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="message" className="col-sm-2 col-form-label">
                            Message
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                id="message"
                                className="form-control mb-4 bg-light"
                                onChange={handleChange}
                                value={formData.message}
                                required
                            />
                        </div>
                    </div>

                    <button className="btn btn-primary my-2" type="submit">
                        Send
                    </button>
                </form>

                {formSubmitted && <p className="text-success">Thank you for reaching out to us! Your message has been received, and we appreciate you taking the time to contact us. Our team will review your inquiry and get back to you as soon as possible. In the meantime, feel free to explore more on our website. We look forward to assisting you!</p>}
            </div>
        </section>
    );
}
