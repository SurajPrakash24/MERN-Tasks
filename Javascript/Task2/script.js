var currentPage = 1;
    var pageNumberElement = document.getElementById('page-number1');

    function previousPage() {
      if (currentPage > 1) {
        currentPage--;
        updatePageNumber();
      }
    }

    function nextPage1() {
      currentPage++;
      updatePageNumber();
    }

    function updatePageNumber() {
      pageNumberElement.textContent = 'Page ' + currentPage;
    }



    var currentPage = 2;
    var pageNumberElement = document.getElementById('page-number2');

    function previousPage() {
      if (currentPage > 2) {
        currentPage--;
        updatePageNumber();
      }
    }

    function nextPage2() {
      currentPage++;
      updatePageNumber();
    }

    function updatePageNumber() {
      pageNumberElement.textContent = 'Page ' + currentPage;
    }


    var currentPage = 3;
    var pageNumberElement = document.getElementById('page-number3');

    function previousPage() {
      if (currentPage > 3) {
        currentPage--;
        updatePageNumber();
      }
    }

    function nextPage3() {
      currentPage++;
      updatePageNumber();
    }

    function updatePageNumber() {
      pageNumberElement.textContent = 'Page ' + currentPage;
    }