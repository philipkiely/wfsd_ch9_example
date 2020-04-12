function writeSonnet () {
    var couplets = [];
    var samples = _.sample(rhymes, 7);
    samples.forEach(rhyme => {
        var r = _.sample(rhyme, 2);
        couplets.push([_.sample(r[0]), _.sample(r[1])]);
    });
    sonnet = "";
    for (var i = 0; i < 5; i += 2) {
        sonnet += couplets[i][0] + "\n";
        sonnet += couplets[i + 1][0] + "\n";
        sonnet += couplets[i][1] + "\n";
        sonnet += couplets[i + 1][1] + "\n";
    }
    sonnet += couplets[6][0] + "\n";
    sonnet += couplets[6][1] + "\n";
    document.getElementById("sonnet").innerText = sonnet;
}
