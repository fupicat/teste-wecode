import { Container } from "./style"
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function Home() {
  const [enviou, setEnviou] = useState(false);
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = data => {
    setEnviou(true);
    console.log(data);
  };

  return (
    <Container>
      <nav>
        <div className="main">
          <a className="logo" href="#">
            CAMP<span>/</span>
          </a>
          <div className="menu">
            <a href="#">Hello</a>
            <a href="#">About</a>
            <a href="#">News</a>
          </div>
        </div>
        <a className="button" href="#">Sign up</a>
      </nav>

      <section className="main">
        <div className="title">
          <h1 className="summer">SUMMER</h1>
          <h1 className="camp">CAMP&rsquo;21</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email address" {...register("email", { required: true, onChange: () => setEnviou(false) })} />
            <button className={enviou ? "enviado" : ""} type="submit">Sign up</button>
          </form>
        </div>
        <div className="fogueira"></div>
      </section>

      <section className="dates">
        <div>
          <h1>23</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis suspendisse mauris.</p>
        </div>
        <div>
          <h1>8</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis suspendisse mauris.</p>
        </div>
        <div>
          <h1>11</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis suspendisse mauris.</p>
        </div>
      </section>
    </Container>
  )
}
