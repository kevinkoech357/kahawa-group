fetch("db.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const slideshow = data.slideshow;
    const carousel = document.querySelector(".carousel");

    slideshow.forEach((slide, index) => {
      const img = document.createElement("img");
      img.src = slide.src;
      img.alt = slide.alt;
      img.classList.add(index === 0 ? "visible" : "hidden");
      carousel.appendChild(img);
    });

    let index = 0;
    setInterval(() => {
      const images = document.querySelectorAll(".carousel img");
      images[index].classList.add("hidden");
      index = (index + 1) % images.length;
      images[index].classList.remove("hidden");
    }, 5000); // Change slide every 2 seconds
  });

//  display events
fetch("db.json")
  .then((response) => response.json())
  .then((data) => {
    const grid = document.querySelector("#grid");

    data.events.slice(0, 3).forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-card";
      grid.appendChild(eventCard);

      const img = document.createElement("img");
      img.src = event.poster;
      img.alt = "Event Poster";
      eventCard.appendChild(img);

      const eventInfo = document.createElement("div");
      eventInfo.className = "event-info";
      eventCard.appendChild(eventInfo);

      const eventDate = document.createElement("p");
      eventDate.className = "event-date";
      eventDate.textContent = event.date;
      eventInfo.appendChild(eventDate);

      const eventName = document.createElement("h2");
      eventName.className = "event-name";
      eventName.textContent = event.name;
      eventInfo.appendChild(eventName);

      const bookNowBtn = document.createElement("button");
      bookNowBtn.className = "book-now-btn";
      bookNowBtn.textContent = "Book Now";
      eventInfo.appendChild(bookNowBtn);

      const ticketSalesEnd = document.createElement("p");
      ticketSalesEnd.className = "ticket-sales-end";
      ticketSalesEnd.textContent = `Ticket sales end on ${event.ticketSalesEnd}`;
      eventInfo.appendChild(ticketSalesEnd);
    });

    document.querySelector("#seeMoreBtn").addEventListener("click", () => {
      window.location.href = "/events"; // Replace with the actual URL of your events page
    });
  });



//   services section
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const servicesGrid = document.querySelector('#servicesGrid');

    data.services.forEach(service => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';
      servicesGrid.appendChild(serviceCard);

      const serviceInfo = document.createElement('div');
      serviceInfo.className = 'service-info';
      serviceCard.appendChild(serviceInfo);

      const serviceName = document.createElement('h2');
      serviceName.className = 'service-name';
      serviceName.textContent = service.name;
      serviceInfo.appendChild(serviceName);

      const serviceDescription = document.createElement('p');
      serviceDescription.className = 'service-description';
      serviceDescription.textContent = service.description;
      serviceInfo.appendChild(serviceDescription);
    });
  });
