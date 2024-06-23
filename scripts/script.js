document.addEventListener("DOMContentLoaded", () => {
  const cardData = {
    totalUsers: 1234,
    sales: 56789,
    newOrders: 123,
    feedback: 234,
  };

  const updateCards = () => {
    document.querySelector(".card.total-users p").textContent =
      cardData.totalUsers;
    document.querySelector(".card.sales p").textContent = `$${cardData.sales}`;
    document.querySelector(".card.new-orders p").textContent =
      cardData.newOrders;
    document.querySelector(".card.feedback p").textContent = cardData.feedback;
  };

  const renderCharts = () => {
    const salesCtx = document.getElementById("salesChart").getContext("2d");
    new Chart(salesCtx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales",
            data: [12000, 15000, 18000, 22000, 25000, 30000],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    const usersCtx = document.getElementById("usersChart").getContext("2d");
    new Chart(usersCtx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "New Users",
            data: [200, 300, 400, 500, 600, 700],
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    const feedbackCtx = document
      .getElementById("feedbackChart")
      .getContext("2d");
    new Chart(feedbackCtx, {
      type: "doughnut",
      data: {
        labels: ["Positive", "Neutral", "Negative"],
        datasets: [
          {
            label: "Feedback",
            data: [150, 50, 30],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  };

  updateCards();
  renderCharts();

  document.getElementById("update-button").addEventListener("click", () => {
    cardData.totalUsers += Math.floor(Math.random() * 10);
    cardData.sales += Math.floor(Math.random() * 1000);
    cardData.newOrders += Math.floor(Math.random() * 5);
    cardData.feedback += Math.floor(Math.random() * 5);
    updateCards();
  });
});