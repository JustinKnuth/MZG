import { Link, Route } from "react-router-dom"
import Nav from "./Nav.jsx"

function About() {


  return (
    
    <div>
      <Nav />
      <h1>About</h1>
      <p>MZG was created for the sole purpose of preparing people for a zombie apocalypse.
      Though it seems unlikely that anything like that will happen, anything is possible.
      The year 2020 showed us a lot about the unknowns of zoonotic viruses.
      Animals have been spreading viruses to human beings since the beginning of time.
      Viruses undergo evolutionary changes just like other life-forms.
      They can mix with our genetic material and adapt to the world around them.
      The main goal of a virus is to replicate and survive.
      This micro level survival mechanism is similar to many, if not all, other life-forms.
      It is imperative that us human-beings are prepared to survive as well.
      This guide was created to help people understand just how to survive in the worst possible scenario.
      Feel free to speak your thoughts and reach out to me if you have any suggestions.
      You can contact me via the form below. Enjoy and stay safe...  </p>

      <form>
        <input type="text" placeholder="name(optional)"/>
        <input type="text" placeholder="email(optional)"/>
        <input type="text" className="message-form" placeholder="Questions, comments or concerns" />
        <button type="submit">Submit</button>
      </form>


    </div>

  )
}

export default About