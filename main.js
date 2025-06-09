
  $(document).ready(function () {
    kCalendar('kCalendar', '2025-07-13');
    wdDday(new Date().toISOString().slice(0, 10), '2025-07-13');
  });

  function kCalendar(id, specialDate) {
    const kCalendar = document.getElementById(id);
    const date = new Date('2025-07-01');
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const dateString = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0)
      lastDate[1] = 29;

    const currentLastDate = lastDate[currentMonth - 1];
    date.setDate(1);
    const currentDay = date.getDay();
    const week = Math.ceil((currentDay + currentLastDate) / 7);

    const specialDay = parseInt(specialDate.split('-')[2]);

    let calendar = '';
    calendar += '<div id="header">';
    calendar += '</div>';
    calendar += '<table><caption>' + currentYear + '년 ' + currentMonth + '월</caption>';
    calendar += '<thead><tr>';
    for (let i = 0; i < 7; i++) calendar += '<th>' + dateString[i].toUpperCase() + '</th>';
    calendar += '</tr></thead><tbody>';

    let dateNum = 1 - currentDay;

    for (let i = 0; i < week; i++) {
      calendar += '<tr>';
      for (let j = 0; j < 7; j++, dateNum++) {
        if (dateNum < 1 || dateNum > currentLastDate) {
          calendar += '<td class="' + dateString[j] + '"> </td>';
        } else if (dateNum === specialDay) {
          calendar += '<td class="' + dateString[j] + '"><div class="fstday">' + dateNum + '</div></td>';
        } else {
          calendar += '<td class="' + dateString[j] + '">' + dateNum + '</td>';
        }
      }
      calendar += '</tr>';
    }

    calendar += '</tbody></table>';
    kCalendar.innerHTML = calendar;

  }
/*
  function wdDday(t, w) {
    const dat1 = new Date(t);
    const dat2 = new Date(w);
    const diff = dat2 - dat1;
    const currDay = 24 * 60 * 60 * 1000;

    if (dat2 < dat1) {
      $('#wd_d-day').text("이 지났습니다");
    } else if (dat2 > dat1) {
      $('#wd_d-day').text(" " + parseInt(diff / currDay) + "일 전");
    } else {
      $('#wd_d-day').text("이 오늘입니다");
    }
  }
*/
