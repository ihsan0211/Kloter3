

function hitung() {
    let kata = document.getElementById("inputKata").value;

    function vowel_count(str1) {
        let vowel_list = "aiueoAIUEO";
        let vcount = 0;

        for (let x = 0; x <str1.length; x++) {
            if (vowel_list.indexOf(str1[x]) !== -1) {
                vcount += 1;
            }
        }
        return vcount;
    }
    const totalKata = vowel_count(kata) ;
    document.getElementById("totalKata").innerHTML = totalKata;
}