import "./selectStyle.css"

const select = () => { 
  return (
    <div class="main-container">
  <div class="heading">
    <h1 class="heading__title">successful booking
</h1>
    <p class="heading__credits"><a class="heading__link" target="_blank" href="https://dribbble.com/sl">Thank you for using the service.</a></p>
  </div>
  <div class="cards">
    <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title">
Please wait for a representative to respond within 15 minutes.</h2>
    </div>
  </div>
</div>
  );
};

export default select;
