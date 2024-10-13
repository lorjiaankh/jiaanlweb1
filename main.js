function TimeTeller() {
    const Time = new Date();
    
    const currentdatetime = Time.toLocaleString();

    document.querySelector('#datetime').textContent = currentdatetime;
}

setInterval(TimeTeller, 1000);