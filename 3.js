function numberOnly(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function rightTriangle() {
    document.getElementById("iNumber").value = document.getElementById("iNumber").value.replace(/^0+/,"")
    var number = parseInt(document.getElementById("iNumber").value)
    let firstprime = [
        '2',   '3',   '5',   '7',   '11',  '13',  '17',  '19',
        '23',  '29',  '31',  '37',  '41',  '43',  '47',  '53',
        '59',  '61',  '67',  '71',  '73',  '79',  '83',  '89',
        '97',  '101', '103', '107', '109', '113', '127', '131',
        '137', '139', '149', '151', '157', '163', '167', '173',
        '179', '181', '191', '193', '197', '199', '211', '223',
        '227', '229', '233', '239', '241', '251', '257', '263',
        '269', '271', '277', '281', '283', '293', '307', '311',
        '313', '317', '331', '337', '347', '349', '353', '359',
        '367', '373', '379', '383', '389', '397', '401', '409',
        '419', '421', '431', '433', '439', '443', '449', '457',
        '461', '463', '467', '479', '487', '491', '499', '503',
        '509', '521', '523', '541'
      ]
    let label = document.getElementById("show")
    let show = "";

    for (let i = 0; i < number; i++) {
        for (let j = 0; j<= i; j++) {
            show = show + " " + firstprime.shift(j);
        }
        show = show + "<br>" ;
    }
    label.innerHTML = show
}
