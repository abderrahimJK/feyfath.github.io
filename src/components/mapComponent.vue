<template>
  <div class="container-fluid mb-4">
    <h2>Reach Us &amp; Be wearing a mask</h2>
    <class class="sub_title"></class>
    <div class="row">
      <div class="col-md contact">
        <form action="" method="post" role="form" validate>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Votre Nom"
            Maxlength="16"
            required
          />
          <inpu4
            type="text"
            name="Email"
            id="Email"
            placeholder="contact@example.com"
            required
          />
          <input type="text" name="Subject" id="Subject" placeholder="Suject" />
          <textarea
            type="text"
            name="Mess age"
            id="Message"
            placeholder="Message"
            required
          ></textarea
          ><br />
          <button
            type="submit"
            class="button"
            formenctype="multipart/form-data"
            value="multipart/form-data"
          >
            Envoyé
          </button>
        </form>
      </div>
      <div class="col-md Location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.560319498243!2d-6.92847081500844!3d30.926911783299502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbb1b8ad3872e2b%3A0x21fc4f94dd984f37!2sTechnical%20College!5e0!3m2!1sar!2sma!4v1601285005031!5m2!1sar!2sma"
          frameborder="0"
          allowfullscreen="true"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.row {
  margin: 0;
  border-radius: 5px;
}
.contact {
  color: white;
  text-align: center;
}
.col-md.Location {
  margin: auto;
  text-align: center;
}
iframe {
  width: 60%;
  height: 20rem;
}
.contact h2 {
  display: block;
  padding: 20px;
}
input[type="text"] {
  width: 70%;
  border: 2px solid #aaa;
  border-radius: 6px;
  outline: none;
  padding: 8px;
  margin: 16px;
  box-sizing: border-box;
  transition: 0.3s;
}
#Message {
  width: 70%;
  border: 2px solid #aaa;
  border-radius: 6px;
  outline: none;
  padding: 30px;
  margin: 5px;
  transition: 0.3s;
}
.button {
  background-color: #04d5fa;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #d4d4d4;
  padding: 5px 25px;
  margin: 10px 0 10px 0;
}
footer {
  color: white;
  background-color: #12223d;
  text-align: center;
  padding: 50px;
}
</style>