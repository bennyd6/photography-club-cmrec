import './contact.css'

export default function Contact(){
    function onSubmit(){
        console.log("hi");
    }
    return(
        <>
        <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </section>
        <div className="contact-main">
            <h1>Ping us here!</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" required placeholder="Enter your name" />
                <input type="email" name="email" placeholder="Enter your email" required />
                <textarea name="message" id="msg" required placeholder="Leave your message here"></textarea>
                <button type="submit">Submit Form</button>
            </form>
        </div>
        </>
    )
}