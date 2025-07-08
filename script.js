body {
  margin: 0;
  font-family: 'Cinzel', serif;
  background-color: #000;
  color: #fff;
  overflow: hidden;
}

.video-container {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

#introVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#startBtn {
  position: absolute;
  font-family: 'Creepster', cursive;
  font-size: 2rem;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
}

.main-content {
  text-align: center;
  padding: 2rem;
  overflow: auto;
  height: 100vh;
  background: radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%);
}

.logo {
  font-family: 'Creepster', cursive;
  color: red;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.poster {
  max-width: 90%;
  border: 3px solid #900;
  border-radius: 10px;
  box-shadow: 0 0 20px #600;
}

footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #ccc;
}

a {
  color: #f44;
  text-decoration: none;
}
